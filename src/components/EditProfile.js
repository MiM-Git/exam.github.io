import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUser } from '../utils/Common'

import './EditProfile.css'
import './Login.css'


const EditProfile = () => {
    const [new_name, setName] = useState('')
    const [new_family, setFamily] = useState('')
    const [error,setError] = useState('')
    const user = getUser()
    const usertojs = JSON.parse(user)
    const id = usertojs.id
    let navigate = useNavigate()
    const backHandle = () => {
        navigate('/mDashboard')
    }
    const editProfile = async (e) => {
        const newData = {id,new_name, new_family }
        const result = await fetch('http://127.0.0.1:8010/change_info', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newData)
        })
        const data = await result.json();
        if (result.statusText === 'UNAUTHORIZED') {
            setError("کاربر با این مشخصات ثبت نشده است")
        }
        if (result.status === 200) {
            setError("ثبت شد")
            window.location.reload()
            navigate("/mDashboard")
        }
        if (result.status === 502) {
            setError("مشکل در ارتباط با سرور")

        }

    }
    return (
        <>
            <>
                <i className='back-icon' onClick={backHandle}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABBklEQVRIie3WPUtDMRTG8X/O7QXBdqzgpqLg0H4Ap+LL4AtU6ActulSHdugHcLKDUAc3RcfiFJPr4m5uzrmD0mfOyQ9CeBJY57/HWW20eh5viZQ3FZVv7w0Hv60XQ3QGHDncRspMS40uJ12RMAV6Dp6ik+uUOdVRr5aTrhRhBvR/0OP27tVbo7AGzYa1aBZsgdaGrdBasCWaDFujkFgg0gp3QB9YhOgHWjQZbiJJcPwqLoBHoFdIOf98ud/WwtmXq5LyZHPn/LVx2BpXF0gublKZObjZI1EXN30W6+Dqr08uri6QzsHlR4z+DFhUcEj0tylzJs3V2R+9x+hPcTwAwWLPdf5+vgHXap8m4FESsAAAAABJRU5ErkJggg==" />
                </i>
            </>
            <div className='page-body'>
                <div class="group">
                    <input type="text" required autoComplete='off' id='nme' className="edit-data" onChange={(e) => setName(e.target.value)} name="name" defaultValue={usertojs.name} />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label className='edit-label'>نام</label>
                </div>
                <div class="group">
                    <input type="text" required autoComplete='off' id='nme' className="edit-data" onChange={(e) => setFamily(e.target.value)} name="family" defaultValue={usertojs.family} />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label className='edit-label'>نام خانوادگی</label>
                </div>
                <p className='login-error'>{error}</p>
                <input className='login-button' onClick={editProfile} type='button' value='اعمال تغییرات' />
            </div >
        </>
    )
}

export default EditProfile