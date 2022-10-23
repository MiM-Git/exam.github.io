import React from 'react'
import ExamNav from './ExamNav'
import QuestionBox from './QuestionBox'
import SideNav from './SideNav'

function QuestionList() {
    return (
        <>
            <SideNav />
            <ExamNav />
            <div className='dashboard-body' style={{ paddingTop: '110px' }}>
                <div className='container'>
                    لیست
                    <QuestionBox />
                </div>
            </div>
        </>
    )
}

export default QuestionList