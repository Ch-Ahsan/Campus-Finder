import React,{useState} from 'react'
import PreNavbar from "./GlobalComponent/PreNavbar";
import { Button } from "react-bootstrap";
import Heading from './Heading'
import Timer from './Timer'
import {useNavigate} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
const ForgotPassword = () => {

  const navigate=useNavigate();
  const location = useLocation();
    const[email,SetEmail]=useState();
    const[choice,SetChoice]=useState();
    const[handle,Sethandle]=useState();
    const[Otp,Setotp]=useState();
    const[userotp,SetUserOtp]=useState();
    

    const PostData=async(e)=>{

        e.preventDefault();

        const res = await fetch("/forgot", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email, choice
            })
          });
          const data = await res.json();
          Setotp(data.value)
          
          if(res.status==400){
            window.alert("User Not Found")
          }else {
            window.alert("User Found")
            Sethandle("moosa")
          }
      

    }
    const ValidateData=()=>{
      if(Otp==userotp){
       
        navigate('/changepassword',{state:{email:{email},choice:{choice}}});
      }else{
        window.alert("OTP not matched")
      }
    }
  return (
    <div>
        <div>
        <PreNavbar />
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
            <div style={{width:"40%",height:"50%",marginTop:"8vmax",borderRadius: "10px",boxShadow:"6px 6px 8px 8px rgb(68, 67, 67)"}}>
                <div style={{marginLeft:"170px"}}>
                <h5 style={{marginLeft:"80px", fontFamily:"sans-serif",marginTop:"35px"}}>Enter Email</h5>
                <input style={{width:"290px"}} type="text" onChange={(e)=>SetEmail(e.target.value)} />
                </div>
                

                <div className="radios">
            <input type="radio" name="choice" value="Customer" onChange={(e)=>SetChoice(e.target.value)}  /> <span>Customer</span>
            <input type="radio" name="choice" value="Seller" onChange={(e)=>SetChoice(e.target.value)}  /> <span>Sellers</span>
          </div>

          <Button onClick={PostData} style={{ backgroundColor: "green", borderColor: "green",marginLeft:"250px",marginBottom:"25px" }} variant="primary"> Send OTP </Button>
               
          <div>
              {
               (() => {
                if (handle == "moosa"){
                    return (
                      <div>
                        <Heading text="OTP"/>

                        <input style={{marginLeft:"172px",width:"280px"}} onChange={(e)=>SetUserOtp(e.target.value)} type="text" /> <br />
                     
                        <Button onClick={ValidateData} style={{ backgroundColor: "green", borderColor: "green",marginLeft:"250px",marginBottom:"25px",marginTop:"10px" }} variant="primary"> Submit OTP </Button>
                      </div>
                    )
                }
                
                return null;
              })()
              }
            </div>
            </div>
           
           

        </div>

        
    </div>
  )
}

export default ForgotPassword