import React from 'react'

import {Card,ListGroup,ListGroupItem} from "react-bootstrap";
import mapp from "../Images/icons.png"

const CustomerOptions = ({text,image}) => {
  return (
    <Card style={{backgroundColor:"white"}}>
    <Card.Img variant="top" src={image} style={{width:"17vmax",width:"17vmax"}} />
    <Card.Body>
      <Card.Text>
     <h4>{text}</h4> 
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default CustomerOptions