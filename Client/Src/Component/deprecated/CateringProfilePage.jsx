import React,{useEffect} from 'react'
import NavbarCustomer from './NavbarCustomer'
import { Card, ListGroup, ListGroupItem, Form, Button } from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';
import Footer from './GlobalComponent/Footer';
import { useState } from "react";
import CateringNavbar from './CateringNavbar';
import Alert from '@mui/material/Alert';
import Heading from './Heading'
import Rating from '@mui/material/Rating';
const pass = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g fill="none"><path d="M0 0h24v24H0V0z" /><path d="M0 0h24v24H0V0z" opacity=".87" /></g><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" /></svg>
const addres = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" /></svg>
const call = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" /></svg>
const username = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
const emai = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" /></svg>
const locatio=<svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 0 24 24" width="30px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg>
const Description=<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/></svg>

const CateringProfilePage = () => {

   
    const[name,SetName]=useState("");
    const[email,SetEmail]=useState("");
    const[password,SetPassword]=useState("");
    const[contact,SetContact]=useState("");
   
    const[description,SetDescription]=useState("");
    const[location,SetLocation]=useState("");
    const[latitude,SetLatitude]=useState('');
    const[longitude,SetLongitude]=useState('');
    const[value,SetValue]=useState('');
    const[Comments,SetComments]=useState([]);
    const [FileName, SetFileName] = useState('');
    const[FileName1,SetFile]=useState('');
    const[FileName2,setFiles]=useState('');
    const[choice,SetChoice]=useState('');
    const key=('AIzaSyDHGunJ6NqvbKLKZpcaldJWY_xeTkqY_Gw');
    const geoApi=`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=false&key=${key}`;
    
    const onChangeFile = e => {
      console.log(e.target.files[0]);
       SetFileName(e.target.files[0]);
      SetFile(URL.createObjectURL(e.target.files[0]));
      setFiles("")
    }
    const PostData=async(e)=>{
        e.preventDefault();
        if(!FileName){
          window.alert("Upload Image again")
        }else
        if( !name || !email || !password || !description || !contact){
          window.alert("feilds cant be empty")
        }else{
          const formData = new FormData();
          formData.append("Picture", FileName);
          formData.append("name", name);
          formData.append("email", email);
          formData.append("password", password);
          formData.append("description", description);
          formData.append("contact", contact);
          formData.append("longitude", longitude);
          formData.append("latitude", latitude);
          formData.append("location", location);
  
  
          const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          const res=await fetch("/CateringProfile",{
            method:"POST",
            // headers:{
            //   "Content-Type":"application/json"
            // },
            body: formData
            // body:JSON.stringify({
            //   name,email,password,description,location,contact,longitude,latitude,formData
            // })
          });
          const data=await res.json();
          if (res.status === 400 || !data) {
              
              SetValue("not")
              console.log("invalid Registration")
            } else {
              SetValue("updated")
              console.log("successfull login")
            }
             

        }
       
       
         
        
    }
    const Getaddress=async()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            SetLatitude(position.coords.latitude);
            SetLongitude(position.coords.longitude);
            
      
          }).catch(err=>console.warn(err.message))
          
    }
    const getActualAddress=()=>{
        fetch(geoApi)
          .then(response=>response.json())
          .then(data=>{
            console.log(data);
            SetLocation(data.results[0].formatted_address)
          })
    }
    
    const CallUpdatedPage=async(e)=>{
     
     
        try{
          const res=await fetch("/CateringProfile",{
            method:"GET",
            headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
            },
            credentials:"include"
          });
   
          const data=await res.json();
         
          SetName(data.name);
          SetEmail(data.email);
          SetPassword(data.password);
          SetContact(data.contact);
          SetDescription(data.description);
          SetLocation(data.location);
          SetComments(data.Comment)
          setFiles(data.Picture)
         
         
           console.log(choice)
          if(!res.status===200){
            const error=new Error(res.error);
            throw error;
          }
        }catch(err){
          console.log(err);
        }
      }
   
 
 
   useEffect(() => {
    
     CallUpdatedPage();
     Getaddress();
  
   }, [])
  

    return (
        <div >
            <div>
            <CateringNavbar name={name} />
            </div>
                        
 { value=="updated" && (<div> <Alert severity="success">Profile Successfully updated</Alert></div>)}
{ value==="not" && (<div> <Alert severity="error">Not updated</Alert></div>)}

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", justifyContent: "space-around" }}>

              
                <div style={{ width: "30%" }} >
                    <Form method='POST' >
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <div class="input-group">
                                <div class="input-group-addon" style={{ border: "0.1px solid", borderColor: " rgb(194, 190, 188)", padding: '5px' }}>
                                    {emai}
                                </div>
                                <Form.Control disabled type="email"  value={email}  onChange={(e)=>SetEmail(e.target.value)}/>
                            </div>


                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicusername">
                            <Form.Label>Username</Form.Label>
                            <div class="input-group">
                                <div class="input-group-addon" style={{ border: "0.1px solid", borderColor: " rgb(194, 190, 188)", padding: '5px' }}>
                                    {username}
                                </div>
                                <Form.Control type="username"  value={name}  onChange={(e)=>SetName(e.target.value)}  />
                            </div>


                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicuserContact">
                            <Form.Label>Contact</Form.Label>
                            <div class="input-group">
                                <div class="input-group-addon" style={{ border: "0.1px solid", borderColor: " rgb(194, 190, 188)", padding: '5px' }}>
                                    {call}
                                </div>
                                <Form.Control type="tel" maxlength="11"   pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={contact}  onChange={(e)=>SetContact(e.target.value)} />
                            </div>


                        </Form.Group>
                      

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <div class="input-group">
                                <div class="input-group-addon" style={{ border: "0.1px solid", borderColor: " rgb(194, 190, 188)", padding: '5px' }}>
                                    {pass}
                                </div>
                                <Form.Control type="password" value={password}  onChange={(e)=>SetPassword(e.target.value)} />
                            </div>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicLocation">
                            <Form.Label>Set Current Location</Form.Label>
                            <div class="input-group">
                                <div class="input-group-addon" style={{ border: "0.1px solid", borderColor: " rgb(194, 190, 188)", padding: '5px' }}>
                                    {locatio}
                                </div>
                                <Form.Control type="text"  value={location} onChange={getActualAddress} />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDescription">
                            <Form.Label>Description</Form.Label>
                            <div class="input-group">
                                <div class="input-group-addon" style={{ border: "0.1px solid", borderColor: " rgb(194, 190, 188)", padding: '5px' }}>
                                    {Description}
                                </div>
                                <Form.Control type="text"  value={description} onChange={(e)=>SetDescription(e.target.value)} />
                            </div>
                        </Form.Group>
                        <input type="file" accept="image/png, image/gif, image/jpeg" placeholder='Upload Picture' name="Picture" 
                    onChange={onChangeFile} /> <br /> <br />
                   
                    {
                      FileName2?(
                        <>
                        <span>Picture Has already been Added</span> <br /> <br />
                        <img  src={`/CateringImages/${FileName2}`} height="200px" width="400px" /> <br /> <br />
                        </>
                      ):(
                        <>
                        <span>Upload Picture!</span>
                        <img  src={FileName1} height="200px" width="400px" /> <br /> <br />
                        </>
                      )

                    }
                    


                        <Button onClick={PostData} style={{backgroundColor:"green",borderColor:"green",padding:"10px",marginLeft:"11vmax"}} variant="primary"> <a style={{textDecoration:"none",color:"white" }} href="/CateringProfile">Update</a> </Button>
                        
                    </Form>
                </div>


            </div>
            <Heading text="Reviews & Comments" />
        <div style={{ display: "flex", flexDirection: "row", backgroundColor: "#F5F5F5" }}>
         
          {
            
            Comments?.map(Mobj=>(
              <div >
              <Card style={{ backgroundColor: "white",height:"100px" }}>
              <Card.Body>
                <h5 style={{ color: "black" }}>{Mobj.Username}</h5>
                <p style={{ color: "black" }}>{Mobj.CateringComment}</p>
                <Rating name="read-only" value={Mobj.Value} readOnly />
                {/* <ReactStars
                  count={5}
                  //  onChange={ratingChanged}
                  size={44}
                  activeColor="#ffd700"
                  value={2} */}
               
              </Card.Body>
            </Card>
            </div>
            ))
          }
            
         
         
        </div>
            <Footer />
        </div>
    )
}

export default CateringProfilePage