import React from 'react'
import { Card, ListGroup, ListGroupItem,Button,Row } from "react-bootstrap";
import car from "../Images/car.png"

const MenuCard = ({name,Price,pic}) => {
  return (
    
        <Card style={{ width: '16rem',height:'20rem',backgroundColor:"white" }}>
  <Card.Img variant="top" src={ pic } width="30px" height="215vmax" />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <span>{Price} Rs</span> <br />
    
    <Button style={{backgroundColor:"green",borderColor:"green"}} variant="primary">Add to Cart</Button>
  </Card.Body>
</Card>

    
  )
}

export default MenuCard