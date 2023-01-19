import React,{useState,useEffect} from 'react'
import CateringNavbar from '../Component/CateringNavbar'
import Footer from './GlobalComponent/Footer'
import success from '../Images/success.png'
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem, Form, Button } from "react-bootstrap";
const OrderEmailConfirmation = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const{CustomerEmail}=location.state.CustomerEmail;
   const SendData=()=>{
    navigate("/CateringHome")

   }
   
  return (
    <div>
        
            <div style={{height:"500px"}}>
              <img style={{marginLeft:"450px"}} src={success} height="350px"/> <br />
              <span style={{marginLeft:"430px",fontSize:"xx-large"}}>Email has been sent to {CustomerEmail}!</span> <br />
              <Button onClick={SendData} style={{marginLeft:"620px", color: "green", borderColor: "green",marginTop:"50px" }} variant="outline-primary"> Back To Home Page</Button>
            </div>

           
    
</div>
  )
}

export default OrderEmailConfirmation