import React, { useState, useEffect } from 'react'
import NavbarCustomer from './NavbarCustomer'
import { Card, ListGroup, ListGroupItem, Table,Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './GlobalComponent/Footer';
import ReactStars from "react-rating-stars-component";
import CateringNavbar from './CateringNavbar';
import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
const phone=<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M19 12Q19 9.075 16.962 7.037Q14.925 5 12 5V3Q13.875 3 15.513 3.712Q17.15 4.425 18.363 5.637Q19.575 6.85 20.288 8.487Q21 10.125 21 12ZM15 12Q15 10.75 14.125 9.875Q13.25 9 12 9V7Q14.075 7 15.538 8.462Q17 9.925 17 12ZM19.95 21Q16.725 21 13.663 19.562Q10.6 18.125 8.238 15.762Q5.875 13.4 4.438 10.337Q3 7.275 3 4.05Q3 3.6 3.3 3.3Q3.6 3 4.05 3H8.1Q8.45 3 8.725 3.225Q9 3.45 9.05 3.8L9.7 7.3Q9.75 7.65 9.688 7.937Q9.625 8.225 9.4 8.45L7 10.9Q8.05 12.7 9.625 14.275Q11.2 15.85 13.1 17L15.45 14.65Q15.675 14.425 16.038 14.312Q16.4 14.2 16.75 14.25L20.2 14.95Q20.55 15.025 20.775 15.287Q21 15.55 21 15.9V19.95Q21 20.4 20.7 20.7Q20.4 21 19.95 21ZM6.05 9 7.7 7.35Q7.7 7.35 7.7 7.35Q7.7 7.35 7.7 7.35L7.25 5Q7.25 5 7.25 5Q7.25 5 7.25 5H5.05Q5.05 5 5.05 5Q5.05 5 5.05 5Q5.175 6.025 5.4 7.025Q5.625 8.025 6.05 9ZM19 18.95Q19 18.95 19 18.95Q19 18.95 19 18.95V16.75Q19 16.75 19 16.75Q19 16.75 19 16.75L16.65 16.25Q16.65 16.25 16.65 16.25Q16.65 16.25 16.65 16.25L15 17.9Q15.975 18.325 16.975 18.6Q17.975 18.875 19 18.95ZM15 17.9Q15 17.9 15 17.9Q15 17.9 15 17.9Q15 17.9 15 17.9Q15 17.9 15 17.9Q15 17.9 15 17.9Q15 17.9 15 17.9Q15 17.9 15 17.9Q15 17.9 15 17.9ZM6.05 9Q6.05 9 6.05 9Q6.05 9 6.05 9Q6.05 9 6.05 9Q6.05 9 6.05 9Q6.05 9 6.05 9Q6.05 9 6.05 9Q6.05 9 6.05 9Q6.05 9 6.05 9Z"/></svg>
const profile = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" /></svg>
const payment = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" /></svg>
const date = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
const location = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" /><circle cx="12" cy="9" r="2.5" /></svg>
const CateringOrderDetails = () => {
    const navigate=useNavigate();

    let { id } = useParams();

    const [userData, SetUserData] = useState('');
    const [orderDetails, SetOrderDetails] = useState([]);
    const [MenuDetails, SetMenuDetails] = useState([]);
    console.log(MenuDetails);



    const CallHomePage = async (e) => {


        try {
            const res = await fetch(`/CateringOrderDetails/${id}`, {
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
        window.alert("Order has been delivered")
        navigate("/CateringOrderPage")
        try {
            const res = await fetch("/AcceptOrder", {
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                  },
                body:JSON.stringify({
                    orderDetails
                  })
                  
            });
           // navigate("/CateringOrderPage")
         
            const data = await res.json();
           

           



            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }else{
               
            }
            
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div>
                <CateringNavbar name={userData.name} />
            </div>
            <div>

                <div>
                    <Table style={{ backgroundColor: "#F5F5F5", opacity: ".8" }}>
                        <thead>
                            <tr>

                                <th>Proudct Name/Description</th>
                                <th>Quantity</th>
                                <th>Price Per 1 Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                MenuDetails?.map(Mobj => (
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

                <div style={{ display: "flex", justifyContent: "space-evenly", flexDirection: "row" }}>
                    <div>
                        <span>{profile}{orderDetails.CustomerName}</span> <br /> <br ></br>
                        <span>{location}Address: {orderDetails.address}</span> <br /> <br />
                        <span>{date}Date: {orderDetails.dates}</span> <br /> <br />
                        <span>{payment}Total Payment Done {orderDetails.payment} RS</span> <br /> <br />
                        <span>{phone} {orderDetails.contact} </span>
                    </div>

                    <div>
                    { 
                         orderDetails.Status==="In Progress"?
                         <div>
                             
                             <Button onClick={PostData} style={{backgroundColor:"green",borderColor:"green",marginTop:"25px",width:"300px",height:"50px"}} variant="primary">  Submit Order For Delivery</Button>
                         </div>
                         :
                         orderDetails.Comment?
                         <>
                         <h2 style={{ marginLeft: "150px" }}>Review & Comment</h2>
                         <Card style={{ backgroundColor: "white" }}>
                             <Card.Body>
                                 <h5 style={{ color: "black" }}>{orderDetails.CustomerName}</h5>
                                 <p style={{ color: "black" }}>{orderDetails.Comment}</p>
                                 <Rating name="read-only" value={orderDetails.Value} readOnly />
                             </Card.Body>
                         </Card>
                         </>
                         :
                         <>
                         <div>Comment has not been added till</div>
                         </>

                    }
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default CateringOrderDetails