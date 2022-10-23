import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { setUserSession } from '../utils/Common';
import './Login.css'

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    let navigate = useNavigate()
    const checkLogin = async () => {
        setLoading(true)
        let person = { email, password }

        if (!email || !password) {
            setError("لطفا پست الکترونیکی و گذرواژه خود را وارد کنید")
            setLoading(false)
        }
        else {
            const result = await fetch('http://127.0.0.1:8010/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(person)
            })
            const data = await result.json();
            if (result.statusText === 'UNAUTHORIZED') {
                setError("کاربر با این مشخصات ثبت نشده است")
                setLoading(false)
            }
            if (result.status === 200) {
                console.log(data.type)
                if (data.type === "Master") {
                    setUsers(data)
                    setUserSession(data);
                    navigate('/mDashboard')
                    return data
                }
                if (data.type === "Student") {
                    setUsers(data)
                    setUserSession(data);
                    navigate('/sDashboard')
                    return data
                }
            }
            if (result.status === 502) {
                setError("مشکل در ارتباط با سرور")
                setLoading(false)
            }
        }
    }
    const registerHandle = () => {
        navigate('/register')
    }
    return (
        <div className='login-form'>
            <div class="group">
                <input required autoComplete='off' id='nme' className="login-data" onChange={(e) => setEmail(e.target.value)} name="email" value={email} type='text' />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className='login-label'>پست الکترونیکی</label>
            </div>
            <div class="group">
                <input type="password" required autoComplete='off' id='nme' className="login-pass" onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className='login-label'>گذرواژه</label>
            </div>
            {<p className='login-error'> {error} </p>}
            <div>
                <input className='login-button' onClick={checkLogin} type='submit' value={loading ? 'لطفا منتظر بمانید...' : 'ورود'} />
                <button onClick={registerHandle} className='register-button'> ثبت نام </button>
            </div>
        </div>
    )
}

export default Login