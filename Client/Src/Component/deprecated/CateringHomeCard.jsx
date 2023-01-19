import React from 'react'
import Card from 'react-bootstrap/Card'
import { Col, Row} from "react-bootstrap";
import caterimage from "../Images/caterimage.jpg"

const Description=<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/></svg>
const profile=<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
const CateringHomeCard = () => {
  return (
    <div>
        <Row xs={1} md={3} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card style={{backgroundColor:"white",height:"15vmax"}}>
        <Card.Img variant="top" src={caterimage} height="130px" />
        <Card.Body>
          <Card.Title>{profile}Al-Shan Catering Providers</Card.Title>
          <Card.Text>
            {Description} We are located at Bahria Town lahore and provide Catering Related Services
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    </div>
  )
}

export default CateringHomeCard