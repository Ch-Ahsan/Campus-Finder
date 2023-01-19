
import React,{useState,useEffect} from 'react'
import CateringCard from './CateringCard'
import NavbarCustomer from './NavbarCustomer'
import { Card, ListGroup, ListGroupItem, Form, Button } from "react-bootstrap";
import Footer from './GlobalComponent/Footer';

const search=<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
const location=<svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 0 24 24" width="30px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg>

const CateringMainPage = () => {


    const[userData,SetuserData]=useState('');
    const[CaterData,SetCaterData]=useState([]);
   console.log(CaterData)
   const CallHomePage=async(e)=>{
    
    
     try{
       const res=await fetch("/carteringmainpages",{
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
  console.log(CaterData)
  return (
    <div>
        <div>
        <NavbarCustomer name={userData.name} />
        </div>
        <div style={{margin:"15px",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <div>
            <h5>{location}{userData.address}</h5>
            </div>
       
            
         </div>
         <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
         {
         
           CaterData?.map(person=>(
            <CateringCard name={person.name} Description={person.description} location={person.location} picture={`/CateringImages/${person.Picture}`} id={person._id}/>
           
           ))
           
         }
         </div>
       
           
            
        

        <div>
            <Footer/>
        </div>

    </div>
  )
}

export default CateringMainPage