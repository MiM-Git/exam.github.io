import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getExam } from '../utils/Common'
import './ExamNav.css'

function ExamNav() {
  const exam = getExam()
  const examtojs = JSON.parse(exam)
  const navigate = useNavigate()
  const goToExamInfo = () => {
    navigate(`/mDashboard/myExam/edit/info${examtojs}`)
  }
  const goToExamQuestios = () => {
    navigate(`/mDashboard/myExam/edit/questions${examtojs}`)
  }
  const goToExam = () => {
    navigate(`/mDashboard/myExam/edit/questionList${examtojs}`)
  }
  return (
    <div className='exam-nav'>
      <ul className='exam-ul'>
        <li className='exam-li'><a onClick={goToExam} className='exam-link'>سوالات آزمون</a></li>
        <li className='exam-li'><a onClick={goToExamQuestios} className='exam-link'>ویرایش سوالات آزمون</a></li>
        <li className='exam-li'><a onClick={goToExamInfo} className='exam-link'>اطلاعات آزمون</a></li>
      </ul>
    </div>
  )
}

export default ExamNav