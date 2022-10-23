import React, { useEffect, useState } from 'react'
import SideNav from './SideNav'
import { Container, Row } from 'react-bootstrap'
import ClassCard from './ClassCard'
import { GrAdd } from 'react-icons/gr'
import CreateClass from './CreateClass'
import './Dashboard.css'
import PopUp from './PopUp'
import { getUser, setStatus } from '../utils/Common'

const Dashboard = () => {
  const [data, setData] = useState([])
  const [repeater, setRepeater] = useState(0)
  const user = getUser()
  const usertojs = JSON.parse(user)
  const master_id = usertojs.id


  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const masterId = { master_id }
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('http://127.0.0.1:8010/load_master_exam', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(masterId)
      }).then(res => res.json()).then(data => setData(data))
    }
    fetchData()
  }, [repeater])
  return (
    <>
      {
        data.length>0 ?
          <>
            <SideNav />
            <div className='dashboard-body'>
              <i className='addExamBtn' onClick={togglePopup}><GrAdd style={{ fontSize: '30px', color: 'wheat', cursor: 'pointer' }} /></i>
              <Container fluid>
                <Row className='rtl'>
                  {
                    data.map((el) => {
                      return <ClassCard id={el.id} header={el.name} startDate={el.start_time} endDate={el.end_time} />
                    })
                  }
                  {isOpen && <PopUp
                    content={
                      <>
                        <CreateClass />
                      </>
                    }
                    handleClose={togglePopup}
                  />}
                </Row>
              </Container>
            </div>
          </>
          :
          <>
            <SideNav />
            <div className='dashboard-body'>
              <i className='addExamBtn' onClick={togglePopup}><GrAdd style={{ fontSize: '30px', color: 'wheat', cursor: 'pointer' }} /></i>
              <Container fluid>
                <Row className='rtl'>
                  {isOpen && <PopUp
                    content={
                      <>
                        <CreateClass />
                      </>
                    }
                    handleClose={togglePopup}
                  />}
                </Row>
              </Container>
            </div>
          </>
      }
    </>
  )
}
export default Dashboard