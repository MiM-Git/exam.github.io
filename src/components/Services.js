import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import pic1 from '../images/clip-the-right-answer.png'
import pic2 from '../images/fabulous-quiz-1.png'
import pic3 from '../images/transistor-man-with-a-huge-pencil-ticks-the-boxes.png'
import './Services.css'

function Services() {
    return (
        <div className="services-sec">
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="part">
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='center-div'>
                                <img src={pic1} className="icon-holder" />
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="service-info">
                                <h6 className="bold">
                                    ایجاد انواع آزمون چند گزینه ای یا تشریحی
                                </h6>
                                <p className="service-info">
                                    شما قادرید انواع آزمون های دو گزینه ای ، چهارگزینه ای و یا با تعداد گزینه دلخواه (حداکثر 8 گزینه برای یک سوال ) و حتی آزمونهای تشریحی را به صورت آنلاین  برگزار نمایید
                                </p>
                            </Col>
                        </Row>

                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="part">
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="service-info">
                                <h6 className="bold">
                                    امکان ایجاد آزمون های تصادفی
                                </h6>
                                <p className="service-info">
                                    شما قادرید برای جلوگیری از تقلب به سه روش مختلف از طریق نمایش تصادفی ترتیب گزینه ها ، نمایش تصادفی ترتیب سوالات و یا ایجاد آزمون های غیر همسان با انتخاب سوالات تصادفی از بانک سوالات به صورت مجزا برای هر شرکت کننده استفاده کنید
                                </p>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='center-div'>
                                <img src={pic2} className="icon-holder" />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="part">
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='center-div'>
                                <img src={pic3} className="icon-holder" />

                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="service-info">
                                <h6 className="bold">
                                    تعریف سوالات دارای شکل و فرمول
                                </h6>
                                <p className="service-info">
                                    توسط ویرایشگر پیشرفته طراحی فرمول موجود در سامانه آزمون ساز می توانید انواع سوالات دارای عبارات ریاضی و فرمول های شیمی و فیزیک یا سوالات دارای تصویر و شکل را تعریف نمایید
                                </p>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Services