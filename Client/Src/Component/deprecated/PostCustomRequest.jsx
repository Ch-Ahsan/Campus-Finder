import React,{useState,useEffect} from 'react'
import NavbarCustomer from './NavbarCustomer'
import {Card,ListGroup,ListGroupItem} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Footer from "./GlobalComponent/Footer.jsx"
import foodorder from "../Images/foodorder.jpg"
import "../Styles/PostCustomRequest.css";
import {  Button } from "react-bootstrap";
const PostCustomRequest = () => {
  const[userData,SetuserData]=useState('');
  const[Description,SetDescription]=useState('');
  const[Time,SetTime]=useState('');
  const[Date,SetDate]=useState('');
  const CallHomePage=async(e)=>{
   
   
    try{
      const res=await fetch("/post",{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      });

      const data=await res.json();
      SetuserData(data);
      console.log(data)
    

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

 const PostData=async(e)=>{
  e.preventDefault();

  if(!Description || !Time){
    window.alert("Feild cant be empty")
  }else{
    const res=await fetch("/post",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        Description,Time
      })
    });
    const data=await res.json();
    if (res.status === 400 || !data) {
        window.alert("Invalid Credentials");
        console.log("invalid Registration")
      } else {
        window.alert("Request Submitted");
        console.log("successfull login")
      }
       
     
    
  }
 
  
  
}
const handleChange=(e)=>{

  console.log(e.target.value);
  const datetime = new window.Date();
  const dates = datetime.toISOString().slice(0, 16);
  if (dates > e.target.value) {
    window.alert("Date Must be higher then current Date")
  } else {
    SetTime(e.target.value);
  }
  

}

  return (
    <div>
        <div>
            <NavbarCustomer name={userData.name}/>
        </div>
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",margin:"7vmax",borderRadius:"20px",backgroundImage: "url(" + foodorder + ")",boxShadow:"6px 6px 8px 8px rgb(68, 67, 67)"}}>
        <Form>
        <div class="mb-3">
  <label style={{fontSize:"x-large",color:"white"}} for="exampleFormControlTextarea2" class="form-label">Wite Description</label>
  <textarea onChange={(e)=>SetDescription(e.target.value)} style={{width:"40vmax",backgroundColor:"black", opacity:".8",color:"white"}} class="form-control" id="exampleFormControlTextarea2" rows="4"></textarea>
</div>
        
        <div>
       
        <Form.Group className="mb-3" controlId="formBasicPassword">

              <Form.Control value={Time} onChange={handleChange} type="datetime-local" />
            </Form.Group>
       
        </div>
       
       
      
        <div style={{marginTop:"1vmax" }}>
        <button onClick={PostData} style={{color:"black",marginLeft:"15vmax"}} type="button" class="btn btn-primary">Post Request</button> 
        </div>
       
        
        </Form>
        </div>
        <Footer/>
        
    </div>
  )
}

export default PostCustomRequest