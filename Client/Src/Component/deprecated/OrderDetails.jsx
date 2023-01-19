import React,{useState,useEffect} from 'react'
import NavbarCustomer from './NavbarCustomer'
import { Card, ListGroup, ListGroupItem, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './GlobalComponent/Footer';
import ReactStars from "react-rating-stars-component";
import {useNavigate} from 'react-router-dom';
import { useParams } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


const profile = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" /></svg>
const payment = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" /></svg>
const date = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
const location = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" /><circle cx="12" cy="9" r="2.5" /></svg>
const loadi=<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"  fill="red"><path d="M9.55 16.45 17 23.9 15.05 25.85 11.05 21.85V24.1Q11.05 29.45 14.875 33.275Q18.7 37.1 24.05 37.1Q25.5 37.1 26.8 36.85Q28.1 36.6 29.25 36.1L31.4 38.25Q29.6 39.25 27.775 39.675Q25.95 40.1 24.05 40.1Q17.5 40.1 12.775 35.375Q8.05 30.65 8.05 24.1V21.85L4.05 25.85L2.1 23.9ZM38.5 31.65 31.05 24.2 33.05 22.2 37 26.15V24.1Q37 18.75 33.175 14.925Q29.35 11.1 24 11.1Q22.55 11.1 21.25 11.375Q19.95 11.65 18.8 12.05L16.65 9.9Q18.45 8.9 20.275 8.5Q22.1 8.1 24 8.1Q30.55 8.1 35.275 12.825Q40 17.55 40 24.1V26.25L44 22.25L45.95 24.2Z"/></svg>
const OrderDetails = () => {
    let{ id}=useParams();
    const navigate=useNavigate();

    const[userData,SetUserData]=useState('');
    const[orderDetails,SetOrderDetails]=useState([]);
    const[MenuDetails,SetMenuDetails]=useState([]);
    const[value,setValue]=useState('');
    const[Comment,SetComment]=useState('');
    console.log(orderDetails);
    const orderid=orderDetails._id;
    const CateringID=orderDetails.Catid;
    const CustomerName=orderDetails.CustomerName;
   
  
    
    const CallHomePage = async (e) => {


        try {
          const res = await fetch(`/orderdetails/${id}`, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            credentials: "include"
          });
    
          const data = await res.json();
          SetUserData(data.user);
          SetOrderDetails(data.order)
          SetMenuDetails(data.Ordermenu);
          
       
         
    
          
    
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
      const PostData=async(e)=>{

        e.preventDefault();
         if(Comment===""){
           window.alert("add comment first")
         }else{

         
        const res=await fetch("/SendComment",{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({
             Comment,orderid,CateringID,CustomerName,value
            })
          });
          const data=await res.json();
          window.alert("Comment Has been Added")
          navigate("/order")
        }
          

      }
    




    return (
        <div>
            <div>
            <NavbarCustomer name={userData.name} />
            </div>
            <div>
               
                <div>
                    <Table style={{ backgroundColor: "#F5F5F5", opacity: ".8" }}>
                        <thead>
                            <tr>
                                
                                <th>Proudct Name/Description</th>
                                <th>Quantity</th>
                                <th>Price For 1 Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                MenuDetails?.map(Mobj=>(
                                    <tr>
                                    
                                    <td>{Mobj.ProductName}</td>
                                    <td>{Mobj.qty}</td>
                                    <td>{Mobj.Price} RS</td>
                                </tr>
                                ))
                            }
                           
                            

                            
                        </tbody>
                    </Table>
                </div>

                <div style={{ display: "flex", justifyContent: "space-evenly", flexDirection: "row", margin: "7vmax" }}>
                    <div>
                        <span style={{fontSize:"large"}}>{profile}{orderDetails.CateringNames}</span> <br /> <br ></br>
                        <span style={{fontSize:"large"}}>{location}Address:{orderDetails.address}</span> <br /> <br />
                        <span style={{fontSize:"large"}}>{date}Date: {orderDetails.dates}</span> <br /> <br />
                        <span style={{fontSize:"large"}}>{payment}Total Payment Done {orderDetails.payment}</span> <br />
                    </div>
                   
                    <div> 
                        { 
                         orderDetails.Status==="In Progress"?
                         <div> <h1 style={{color:"red"}}>{loadi}Order Delivery in process</h1></div>
                         :
                         orderDetails.Comment?
                         <>
                         <h2>Comment & Review</h2>
                         <span  style={{fontSize:"xx-large",color:"green"}}>{orderDetails.Comment}</span> <br/>
                       
                        <Rating name="read-only" value={orderDetails.Value} readOnly />
                         </>
                         :
                         <>
                         
                         <h4>Leave a Comment</h4>
                        <textarea value={Comment} onChange={(e)=>SetComment(e.target.value)} style={{ width: "30vmax", backgroundColor: "white", color: "black", marginBottom: "10px", borderColor: "black" }} class="form-control" id="exampleFormControlTextarea2" rows="4"></textarea>
                        
                        <Typography component="legend">Give Ratings</Typography>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                               setValue(newValue);
                             }}
      /> <br />
       <button onClick={PostData} type="button" class="btn btn-primary">Submit</button>
                        </>
                        }
                       
                    </div> 
                   
                    
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default OrderDetails