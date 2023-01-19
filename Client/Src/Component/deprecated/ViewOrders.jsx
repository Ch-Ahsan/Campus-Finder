import React,{useState,useEffect} from 'react'
import NavbarCustomer from './NavbarCustomer'
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import image2 from "../Images/image2.png"
import Footer from './GlobalComponent/Footer';
import Heading from './Heading'

const ViewOrders = () => {

    const[userData,SetUserData]=useState('');
    const[orderDetails,SetUserDetails]=useState([]);
   const bb = [].concat(orderDetails).reverse();

    
    const[CateringName,SetCateringName]=useState('');
   
  
    
    const CallHomePage = async (e) => {


        try {
          const res = await fetch("/getorder", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            credentials: "include"
          });
    
          const data = await res.json();
          SetUserData(data.User);
          SetUserDetails(data.result)
          SetCateringName(data.CName);
         
    
          
    
          if (!res.status === 200) {
            const error = new Error(res.error);
            throw error;
          }
        } catch (err) {
          console.log(err);
        }
      }
    
    
      useEffect(() => {
        CallHomePage();
    
      }, [])
    



    return (
        <div>

            <div>
            <NavbarCustomer name={userData.name} />
            </div>
            <div style={{display:"flex",justifyContent:"center",margin:"3vmax",flexWrap:"wrap"}}>
                {
               
                    bb?.map(Mobj=>(

             
                      <Card style={{backgroundColor:"#F5F5F5",opacity:".9",width:"50vmax",margin:"1vmax",height:"15vmax"}} className="text-center">
                          <Card.Header style={{color:"Green"}}>  {Mobj?.Status}</Card.Header>
                         
                          <Card.Body>
                              <Card.Title>{Mobj?.CateringNames}</Card.Title>
                              
                              
                              <Button style={{backgroundColor:"green",borderColor:"green",marginTop:"60px"}} variant="primary"> <a style={{textDecoration:"none",color:"white" }} href={`/orderdetails/${Mobj?._id}`}>See Details</a> </Button>
                          </Card.Body>
                        
                         
                      </Card>
                         ))
                        
                    
                     


                         
}
                
                  
            </div>
            <Footer/>


        </div>
    )
}

export default ViewOrders