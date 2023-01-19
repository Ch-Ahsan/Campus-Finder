import React, { useState } from 'react'
import PreNavbar from "./GlobalComponent/PreNavbar";
import { Button } from "react-bootstrap";
import Heading from './Heading'
import Timer from './Timer'
import {useNavigate} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
const ChangePassword = () => {

    const [password, SetPassword] = useState();
    const navigate=useNavigate();
    const location = useLocation();
    const{email}=location.state.email;
    const{choice}=location.state.choice;


    const PostData = async (e) => {

        e.preventDefault();

        const res = await fetch("/changepassword", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password,email,choice
            })
        });
        const data = await res.json();
       

        if (res.status == 400) {
            
            navigate("/login")
        }


    }


return (
    <div>
        <div>
            <PreNavbar />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "40%", height: "50%", marginTop: "8vmax", borderRadius: "10px", boxShadow: "6px 6px 8px 8px rgb(68, 67, 67)" }}>
                <div style={{ marginLeft: "170px" }}>
                    <h5 style={{ marginLeft: "80px", fontFamily: "sans-serif", marginTop: "35px" }}>Enter Password</h5>
                    <input style={{ width: "290px" }} type="password" onChange={(e) => SetPassword(e.target.value)} />
                    <Button onClick={PostData} style={{ backgroundColor: "green", borderColor: "green", marginLeft: "80px", marginBottom: "25px",marginTop:"10px" }} variant="primary"> Change Password</Button>

                </div>






            </div>
            </div>





        </div>
        )
}
export default ChangePassword