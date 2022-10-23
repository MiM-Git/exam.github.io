import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import DropFileInput from './DropFileInput';
import './QuestionBox.css'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'

function QuestionBox() {
    return (
        <>
            <div className='question-card'>
                <Row style={{ direction: 'rtl' }}>
                    <Col sm="12" md='8' lg='10'>
                        <Row>
                            <p><span> 1 </span> سوال تستی </p>
                            <Col lg='3' md='6' sm='12'>
                                <span><input type={'checkbox'} /> گزینه یک </span>
                            </Col>
                            <Col lg='3' md='6' sm='12'>
                                <span><input type={'checkbox'} /> گزینه دو </span>
                            </Col>
                            <Col lg='3' md='6' sm='12'>
                                <span><input type={'checkbox'} /> گزینه سه </span>
                            </Col>
                            <Col lg='3' md='6' sm='12'>
                                <span><input type={'checkbox'} /> گزینه چهار </span>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm='12' md='4' lg='2' style={{ textAlign: 'center' }}>
                        <button className='questions-btn'> <AiOutlineEdit className='questions-icon' /> ویرایش </button>
                        <br />
                        <button className='questions-btn'> <AiOutlineDelete className='questions-icon' /> حذف  </button>
                    </Col>
                </Row>
            </div>

            <div className='question-card'>
                <Row style={{ direction: 'rtl' }}>
                    <Col sm="12" md='8' lg='10'>
                        <p><span> 1 </span> سوال تشریحی </p>
                    </Col>
                    <Col sm='12' md='4' lg='2' style={{ textAlign: 'center' }}>
                        <button className='questions-btn'> <AiOutlineEdit className='questions-icon' /> ویرایش </button>
                        <br />
                        <button className='questions-btn'> <AiOutlineDelete className='questions-icon' /> حذف  </button>
                    </Col>
                </Row>

            </div>

            <div className='question-card'>
                <Row style={{ direction: 'rtl' }}>
                    <Col sm="12" md='8' lg='10'>
                        <p><span> 1 </span> سوال فایلی </p>
                    </Col>
                    <Col sm='12' md='4' lg='2' style={{ textAlign: 'center' }}>
                        <button className='questions-btn'> <AiOutlineDelete className='questions-icon' /> حذف  </button>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default QuestionBox