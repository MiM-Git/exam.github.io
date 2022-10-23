import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import { FaChalkboardTeacher } from 'react-icons/fa'

import './ClassCard.css'
import { setExamSession } from '../utils/Common'
const ClassCard = ({ id, header, startDate, endDate }) => {

    const navigate = useNavigate()
    setExamSession({id,startDate,endDate})
    const goToExam = () => {
        navigate(`/mDashboard/myExam/edit/info${id}`)
    }
    const goToResult = () => {
        navigate(`/mDashboard/myExam/result${id}`)
    }
    return (
        <Col xxl={2} xl={3} lg={3} md={4} sm={6} xs={6}  >
            <div key={id} class="card">
                <div class="imgBx">
                    <FaChalkboardTeacher className='teach-icon' />
                </div>
                <div class="contentBx">
                    <h3>{header}</h3>
                    <div class="size">
                        <div>
                            <h4>تاریخ و زمان شروع :
                                <br /> {startDate}</h4>
                        </div>
                        <br />
                        <div>
                            <h4>تاریخ و زمان پایان :
                                <br /> {endDate}</h4>
                        </div>
                    </div>
                    <div>
                        <h4>تاریخ و زمان پایان : {endDate}</h4>
                    </div>
                    <a onClick={goToExam}>ویرایش آزمون</a>
                    <a onClick={goToResult}>نتایج آزمون</a>
                </div>
            </div>
        </Col>
    )
}

export default ClassCard