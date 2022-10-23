import React, { useState } from 'react'
import './Register.css'

const Register = () => {
    const [name, setName] = useState("")
    const [family, setFamily] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCpassword] = useState("")
    const [type, setType] = useState("")
    const [loading, setLoading] = useState()
    const [error, setError] = useState('')
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChangeEmail = event => {
        if (!isValidEmail(event.target.value)) {
            setError('ایمیل نا معتبر است');
        } else {
            setError(null);
            setEmail(event.target.value)
        }
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleChangeCPassword = (e) => {
        if(password!= e.target.value){
            setError('پسورد را به درستی تایید کنید')
        }
        else{
            setError(null)
            setPassword(e.target.value)
        }
    }

    const checkRegister = async () => {
        const formData = { name, family, email, password, type }

        if (password !== cPassword) {
            setError('گذرواژه را به درستی تایید کنید')
        }
        if (name.trim().length === 0 || family.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0 || type.trim().length === 0) {
            setError("لطفا همه فیلد ها را پر کنید")
        }
        else {
            const result = await fetch('http://127.0.0.1:8010/register', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            if (result.status === 401) {
                setError('حساب کاربری با این ایمیل وجود دارد')
            } if (result.status === 200) {
                setError("حساب با موفقیت ساخته شد با آدرس پست الکترونیکی و رمز عبور خود وارد شوید")
                setLoading(false)
            }
            if (result.status === 502) {
                setError("مشکل در ارتباط با سرور")
                setLoading(false)
            }
        }
    }

    return (
        <div className='register-form'>
            <div class="group">
                <input required autoComplete='off' name='name' className="register-input" type='text' onChange={(e) => setName(e.target.value)} />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className='register-label'>نام</label>
            </div>
            <div class="group">
                <input required autoComplete='off' name='family' className="register-input" type='text' onChange={(e) => setFamily(e.target.value)} />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className='register-label'>نام خانوادگی</label>
            </div>
            <div class="group">
                <input required autoComplete='off' name='email' className="register-input" type='text' onChange={handleChangeEmail} />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className='register-label'>پست الکترونیکی</label>
            </div>
            <div class="group">
                <input required autoComplete='off' name='password' className="register-input" type='password' onChange={handleChangePassword} />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className='register-label'>گذرواژه</label>
            </div>
            <div class="group">
                <input required autoComplete='off' name='confirmpassword' className="register-input" type='password' onChange={handleChangeCPassword} />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className='register-label'>تایید گذرواژه</label>
            </div>
            <div class="group">
                {/* <input required autoComplete='off' name='type' className="register-input" type='text' onChange={(e) => setType(e.target.value)} /> */}
                <select defaultValue={''} className='type-select' onChange={(e) => setType(e.target.value)}>
                    <option value={''} disabled >لطفا انتخاب کنید</option>
                    <option value={"Student"}>دانشجو</option>
                    <option value={"Master"}>استاد</option>
                </select>
            </div>
            {
                <div className='login-error'>{error}</div>
            }
            <input className='login-button' onClick={checkRegister} type='submit' value={loading ? 'لطفا منتظر بمانید...' : 'ثبت نام'} />
        </div>
    )
}

export default Register