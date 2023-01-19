import React,{useState,useEffect} from 'react'
import NavbarCustomer from './NavbarCustomer'
import { Card, ListGroup, ListGroupItem, Table,Button } from "react-bootstrap";
import Footer from './GlobalComponent/Footer';
import { useParams } from "react-router-dom";
const Cart = () => {

  let{ id}=useParams();

  const[userData,SetuserData]=useState('');
  const[CaterData,SetCaterData]=useState('');
  const[Menu,SetMenu]=useState([]);
 
 const CallHomePage=async(e)=>{
  
  
   try{
     const res=await fetch(`/Cart/${id}`,{
       method:"GET",
       headers:{
         Accept:"application/json",
         "Content-Type":"application/json"
       },
       credentials:"include"
     });

    const  data=await res.json();
     SetuserData(data.User);
     
     SetCaterData(data.result);
     SetMenu(data.result.Menus);

     if(!res.status===200){
       const error=new Error(res.error);
       throw error;
     }
   }catch(err){
     console.log(err);
   }
 }


useEffect(() => {
  CallHomePage();
  
}, [])
console.log(Menu)
  return (
    <div>
      <div>
        <NavbarCustomer />
      </div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>

              <th>Description</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              
              <td>BreakFast</td>
              <td> <Button style={{ backgroundColor: "green", borderColor: "green",marginRight:"10px" }} variant="primary"> <a style={{ textDecoration: "none", color: "white",marginLeft:"10px" }} href="/">-</a> </Button>2 <Button style={{ backgroundColor: "green", borderColor: "green" }} variant="primary"> <a style={{ textDecoration: "none", color: "white" }} href="/">+</a> </Button></td>
              <td>200 RS</td>
            </tr>
            <tr>
              
              <td>BreakFast</td>
              <td> <Button style={{ backgroundColor: "green", borderColor: "green",marginRight:"10px" }} variant="primary"> <a style={{ textDecoration: "none", color: "white",marginLeft:"10px" }} href="/">-</a> </Button>2 <Button style={{ backgroundColor: "green", borderColor: "green" }} variant="primary"> <a style={{ textDecoration: "none", color: "white" }} href="/">+</a> </Button></td>
              <td>200 RS</td>
            </tr>
            <tr>
              
              <td>BreakFast</td>
              <td> <Button style={{ backgroundColor: "green", borderColor: "green",marginRight:"10px" }} variant="primary"> <a style={{ textDecoration: "none", color: "white",marginLeft:"10px" }} href="/">-</a> </Button>2 <Button style={{ backgroundColor: "green", borderColor: "green" }} variant="primary"> <a style={{ textDecoration: "none", color: "white" }} href="/">+</a> </Button></td>
              <td>200 RS</td>
            </tr>
            <tr>
              
              <td>BreakFast</td>
              <td> <Button style={{ backgroundColor: "green", borderColor: "green",marginRight:"10px" }} variant="primary"> <a style={{ textDecoration: "none", color: "white",marginLeft:"10px" }} href="/">-</a> </Button>2 <Button style={{ backgroundColor: "green", borderColor: "green" }} variant="primary"> <a style={{ textDecoration: "none", color: "white" }} href="/">+</a> </Button></td>
              <td>200 RS</td>
            </tr>
          </tbody>
        </Table>
        
      </div>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
        <div>
          <span >Total : 1200 RS</span> <br /> <br />
          <span>Delivery Address: House no 655 Jasime Block</span> <br /> <br />
          <Button style={{ backgroundColor: "green", borderColor: "green",marginRight:"10px" }} variant="primary"> <a style={{ textDecoration: "none", color: "white",marginLeft:"10px" }} href="/payment">Review Payment</a> </Button> <br /> <br />

        </div>

      </div>
     <Footer/>
    </div>
  )
}

export default Cart