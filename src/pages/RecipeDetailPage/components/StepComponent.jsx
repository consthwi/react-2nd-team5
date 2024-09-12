import React from 'react'
import { Container, Row, Col,Alert } from "react-bootstrap";


const StepComponent = ({step}) => {
  return (
    <div>
      <Row className='mb-5 mt-5'>
       <Col><div style={{
        backgroundImage:"url(https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2023/04/11/20230411000085_0.jpg)" 
     }} className='recipe-img'></div></Col>
       <Col><div className='step-text'>STEP01</div>
       
      </Col>
      </Row>


      {step}
      
      </div>
  )
}

export default StepComponent