import React from "react";
import { Col, Container } from "react-bootstrap";
import './Banner.css'
function Banner() {
    return (
        <div className="banner">
            <Container>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <h1 className="banner-title">
                        سامانه آزمون ساز آنلاین
                        و
                        برگزاری دوره های مجازی
                    </h1>
                    <span className="banner-info">
                        سیستم آزمون ساز آنلاین به مدیران مراکز آموزشی ، دبیران و اساتید این امکان را خواهد داد تا آزمون های مجازی خود را به صورت اینترنتی و آنلاین برگزار نمایند . این سامانه کلیه امکانات لازم جهت برگزاری دوره های آموزشی آنلاین ، برگزاری آزمون آنلاین و صدور کارنامه و گزارشات مرتبط با آنها را به صورت یکپارچه در اختیار مراکز آموزشی قرار می دهد.
                    </span>
                </Col>
            </Container>
        </div >
    );
}

export default Banner