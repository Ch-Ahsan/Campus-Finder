import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import PreNavbar from "./GlobalComponent/PreNavbar";
import "../Styles/Registration.css"

const passwor = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g fill="none"><path d="M0 0h24v24H0V0z" /><path d="M0 0h24v24H0V0z" opacity=".87" /></g><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" /></svg>
const usernam = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
const emai = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" /></svg>
const Registration=()=>{

  const navigate=useNavigate();
  const location = useLocation();
  

  const{Name}=location.state.name;
  const{Email}=location.state.email;
  

  const[user,setUser]=useState({
      name:"",
      email:"", 
      password:"",
      repassword:"",
      choice:""

  })
 
  const handlechange = (event) => {
     let target=event.target;
     let name=target.name;
     let value=target.value;
 // alert(`${name} ${value}`);
    setUser({
      ...user,
      [name]:value
    })

    console.log(user);
   
  }

  const PostData=async(e)=>{
      e.preventDefault();
      const{name,email,password,repassword,choice}=user;
      console.log(user);
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const res=await fetch("/Register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,email,password,repassword,choice
        })
      });
      const data=await res.json();
      if(res.status===422){
        window.alert("user Already registered")
  
      }else
      if(password!=repassword){
        window.alert("Password Doesnt Match");
        navigate("/Registration")
    }else
    if(!email.match(re)){
      window.alert("Email must Contain @ && .com");
    }else{
        window.alert("Successfull Regsitration");
       
        navigate("/login")
      }
    
      
  }
  
useEffect(()=>{
  setUser(prevstate=>({
    ...prevstate,
    name:Name,
    email:Email
  }))
  
},[])
  
    return(
    
      
      <div className="prenav">
        <div>
        <PreNavbar/>
        </div>
       
        <div className="registration">
            <h2>Signup</h2>
            <form method="POST">
            <div class="input-group">
            <div class="input-group-addon" style={{ marginBottom: "10px", border: "0.1px solid", borderColor: " rgb(194, 190, 188)", padding: '5px' }}>
              {usernam}
            </div>
            <input style={{ width: "300px", marginBottom: "10px", border: "0.1px solid", borderColor: " rgb(194, 190, 188)" }} type="text"name="name" value={user.name} placeholder="Enter username"  onChange={handlechange} /> <br />
          </div>
          <div class="input-group">
            <div class="input-group-addon" style={{ marginBottom: "10px", border: "0.1px solid", borderColor: " rgb(194, 190, 188)", padding: '5px' }}>
              {emai}
            </div>
            <input style={{ width: "300px", marginBottom: "10px", border: "0.1px solid", borderColor: " rgb(194, 190, 188)" }} type="text" name="email" value={user.email} placeholder="Enter email"  onChange={handlechange}/> <br />
          </div>
          <div class="input-group">
            <div class="input-group-addon" style={{ marginBottom: "10px", border: "0.1px solid", borderColor: " rgb(194, 190, 188)", padding: '5px' }}>
              {passwor}
            </div>
            <input style={{ width: "300px", marginBottom: "10px", border: "0.1px solid", borderColor: " rgb(194, 190, 188)" }} type="password" name="password" value={user.password} placeholder="Enter Password"  onChange={handlechange}/> <br />
          </div>
          <div class="input-group">
            <div class="input-group-addon" style={{ marginBottom: "10px", border: "0.1px solid", borderColor: " rgb(194, 190, 188)", padding: '5px' }}>
              {passwor}
            </div>
            <input style={{ width: "300px", marginBottom: "10px", border: "0.1px solid", borderColor: " rgb(194, 190, 188)" }} type="password"  name="repassword" value={user.repassword} placeholder="Enter Password"  onChange={handlechange}/> <br />
          </div>
          
           
            
           
           
            <div className="rad">
              <input type="radio" name="choice" value="Customer"  onChange={handlechange}/> <span>Are You a Customer?</span>
              <input type="radio" name="choice" value="Seller"  onChange={handlechange} /> <span>Are you a Seller?</span>
              </div>
             <input type="submit" name="signup" id="regite" value="Register" onClick={PostData} />
              
            </form>

        </div>
      
      
        
      </div>

    
     

    )
}
export default Registration