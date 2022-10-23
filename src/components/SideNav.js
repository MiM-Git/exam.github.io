import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { getUser, removeUserSession } from '../utils/Common'

function SideNav() {
    let navigate = useNavigate()
    const [showPan, setShowPan] = useState(false)
    const user = getUser()
    const usertojs = JSON.parse(user)


    const closeMenu = () => {
        const body = document.querySelector('.dashboard-body')
        const menu = document.querySelector('.side-menu')
        body.classList.remove('body-padding')
        menu.classList.remove('open')
    }
    const openMenu = () => {
        const menu = document.querySelector('.side-menu')
        const body = document.querySelector('.dashboard-body')
        menu.classList.add('open')
        body.classList.add('body-padding')
    }

    const logoutHandle = () => {
        removeUserSession()
        navigate('/login')
    }
    const editHandle = () => {
        navigate('/mDashboard/edit')
    }
    const addClassHandle = () => {
        navigate('/mDashboard/addClass')
    }
    const homeHandle = () => {
        navigate('/mDashboard')
    }
    return (
        <>
            <div className='user-nav'>
                <span className='user-info'>
                    <FaBars className='open-sidebar-menu' onClick={openMenu} />
                    کاربر
                    <span className='user-name'>{usertojs.name}</span>
                    خوش آمدید
                </span>
            </div>
            <div className='side-menu'>
                <AiOutlineClose className='close-sidebar-btn' onClick={closeMenu} />
                <ul className='menu-ul'>
                    <li className='menu-item-side'><a className='menu-links' onClick={homeHandle}>خانه</a></li>
                    <li className='menu-item-side'><a className='menu-links' onClick={logoutHandle}>خروج</a></li>
                </ul>
            </div>
        </>
    )
}

export default SideNav