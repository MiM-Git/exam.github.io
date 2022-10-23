import React, { useState } from 'react'
import { setExamSession } from '../utils/Common';
import ExamNav from './ExamNav';
import SideNav from './SideNav';

function MyClass() {
  const examId = window.location.href.slice(-2)
  setExamSession(examId)
  return (
    <>
      <SideNav />
      <ExamNav />
      <div className='dashboard-body' style={{ paddingTop: '110px' }}>
        <div className='container'>
          ویرایش آزمون
        </div>
      </div>
    </>
  );
}

export default MyClass