import React, { useState } from 'react';
import DatePicker, { DateObject } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import './CreateClass.css'
import './Login.css'
import TimePicker from 'react-multi-date-picker/plugins/time_picker';
import { getUser, setStatus } from '../utils/Common';

function CreateClass() {
  const [name, setName] = useState("")
  const [exam_pass, setPassword] = useState("")
  const [random_answer, setRAnswer] = useState(false)
  const [random_question, setRQuestion] = useState(false)
  const [uni_name, setUniName] = useState("")
  const [examList, setExamList] = useState()
  const [error, setError] = useState("")
  // const [startDate, setStartDate] = useState()
  const [start_time, setStartTime] = useState()
  // const [endDate, setEndDate] = useState()
  const [end_time, setEndTime] = useState()
  // const [status, setStatus] = useState(false)

  const user = getUser()
  const usertojs = JSON.parse(user)
  const master_id = usertojs.id
  const today = new DateObject({ calendar: persian, locale: persian_fa })
  const handleRanswer = (e) => {
    setRAnswer(e.target.checked)
  }

  const submitExam = async (e) => {
    e.preventDefault()
    if (!name || !uni_name || !start_time || !exam_pass || !end_time) {
      setError("لطفا فیلد های مربوطه را پر کنید")
    }
    else {
      const newExam = { name, uni_name, random_question, random_answer, start_time, exam_pass, end_time, master_id }
      setExamList(newExam)
      const result = await fetch('http://127.0.0.1:8010/register_exam', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newExam)
      })
      const data = await result.json();
      if (result.statusText === 'UNAUTHORIZED') {
        setError("کاربر با این مشخصات ثبت نشده است")
      }
      if (result.status === 200) {
        window.location.reload()
        setError("ثبت شد")
      }
      if (result.status === 502) {
        setError("مشکل در ارتباط با سرور")

      }
    }
  }


  return (
    <>
      <form onSubmit={submitExam} className='class-form'>
        <div class="group">
          <input required autoComplete='off' id='Ename' className="login-data" onChange={(e) => setName(e.target.value)} value={name} name="name" type='text' />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label className='login-label'>نام آزمون</label>
        </div>
        <div>
          <div>تاریخ و ساعت شروع</div>
          <DatePicker
            format="YYYY/MM/DD HH:mm"
            minDate={new DateObject({ calendar: persian }).set("day", today.day)}
            onChange={e => setStartTime(`${e.year}/${e.month}/${e.day} ${e.hour}:${e.minute}`)}
            plugins={[
              <TimePicker hideSeconds position="right" />
            ]}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
          />
        </div>
        <div>
          <div>تاریخ و ساعت پایان</div>
          <DatePicker
            format="YYYY/MM/DD HH:mm"
            minDate={new DateObject({ calendar: persian }).set("day", today.day)}
            onChange={e => setEndTime(`${e.year}/${e.month}/${e.day} ${e.hour}:${e.minute}`)}
            plugins={[
              <TimePicker hideSeconds position="right" />
            ]}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
          />
        </div>
        <div class="group">
          <input type="text" required autoComplete='off' id='Uname' onChange={(e) => setUniName(e.target.value)} value={uni_name} className="login-pass" name="uni_name" />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label className='login-label'> نام موسسه</label>
        </div>
        <div class="group">
          <input type="text" required autoComplete='off' id='nme' onChange={(e) => setPassword(e.target.value)} value={exam_pass} className="login-pass" name="exam_pass" />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label className='login-label'>رمز عبور</label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input defaultValue={random_question} name='random_question' type="checkbox" onChange={(e) => setRQuestion(e.target.checked)} value={random_question} />
          <label style={{ marginRight: "10px" }}>سوالات تصادفی باشند</label>
        </div>
        <div>
          <input defaultValue={random_answer} name='random_answer' type="checkbox" onChange={(e) => handleRanswer(e)} value={random_answer} />
          <label style={{ marginRight: "10px" }}>گزینه ها تصادفی باشند</label>
        </div>
        {<p className='login-error'> {error} </p>}
        <div>
          <button type='submit' className='register-button'> ثبت آزمون </button>
        </div>
      </form>
    </>
  )
}
export default CreateClass 