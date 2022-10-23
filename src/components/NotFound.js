import React from 'react'
import {  useNavigate } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
    const navigate = useNavigate()
    const goToHome = () =>{
        navigate(`/`)
    }
    return (
        <div class="flex-container">
            <div class="text-center">
                <h1>
                    <span class="fade-in" id="digit1">4</span>
                    <span class="fade-in" id="digit2">0</span>
                    <span class="fade-in" id="digit3">4</span>
                </h1>
                <h3 class="fadeIn">صفحه مورد نظر پیدا نشد</h3>
                <button type="button" name="button" onClick={goToHome}>بازگشت به خانه</button>
            </div>
        </div>
    )
}

export default NotFound