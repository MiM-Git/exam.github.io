import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb"
import { FiTwitter } from 'react-icons/fi'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <Row>
        <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} className='contact-us'>
          <span className=''>
            <p className='contact-us-title'>
              با ما همراه باشید
            </p>
          </span>
          <hr style={{ background: 'wheat', color: 'wheat', height: '2px', width: '70%', margin: 'auto' }} />
          <span className='contact-us-icon'>
            <AiOutlineInstagram style={{ margin: '10px', fontSize: '40px' }} />
            <TbBrandTelegram style={{ margin: '10px', fontSize: '40px' }} />
            <FiTwitter style={{ margin: '10px', fontSize: '40px' }} />
          </span>
        </Col>
        <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}  className='footer-info'>
          <p>
              نرم افزار فرم ساز آنلاین رایگان تحت وب است که ساخت پرسشنامه آنلاین، نظرسنجی آنلاین، آزمون آنلاین و فرم آنلاین را برای کاربران ساده، سریع و ارزان کرده است. آزمون ساز آنلاین     توسط معلمان، دانشگاه ها و مدارس، پرسشنامه ساز و فرم ساز پرس    توسط مدیران بازاریابی و تحقیقات بازار، مدیران منابع انسانی برای انجام نظرسنجی کارکنان و ارزیابی عملکرد منابع انسانی، مدیران مشتری برای انجام رضایت سنجی مشتری و سنجش تجربه مشتری، مدیران استارت آپ ها، مدیران IT و مدیران عامل استفاده می‌شود. کاربران پرس   به صدها نمونه فرم، نمونه آزمون، نمونه پرسشنامه و نمونه نظرسنجی برای شروع به کار دسترسی دارند.           </p>
          <span className=''></span>
        </Col>
      </Row>
    </div>
  )
}

export default Footer