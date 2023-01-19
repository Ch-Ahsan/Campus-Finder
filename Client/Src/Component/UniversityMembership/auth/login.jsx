import React, { useState, useEffect } from "react";
import "../../../Styles/Login.css";
import PreNavbar from "../../GlobalComponent/PreNavbar";
import { useNavigate } from "react-router-dom";
// import GoogleLogin from 'react-google-login';
// import GoogleAuth from '../GoogleAuth.jsx';
import Alert from "@mui/material/Alert";
import GoogleIcon from "@mui/icons-material/Google";
import LoginIcon from "@mui/icons-material/Login";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import axios from "axios";
import {
  Button,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Radio,
  TextField,
} from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [choice, setChoice] = useState("");
  const [value, SetValue] = useState("");

  const PostData = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      window.alert("feilds cant be empty");
    }else{
    let update = {
      email: email,
      password: password,
    };
    console.log(update)
    axios.post("/validateLogin", update).then((res) => {
      console.log(res);
      console.log(res.data.status)
      if(res.data?.status===402){
        window.alert('Wrong Credentials')
      }else {
        window.alert("successfull login");
      navigate("/portalHome");

      }
      
    });
  }
  };

  return (
    <div className="pre">
      <div>
        <PreNavbar />
      </div>
      <div>
        {value === "not" && (
          <div>
            {" "}
            <Alert severity="error">invalid Credentials</Alert>
          </div>
        )}
        {value === "updated" && (
          <div>
            {" "}
            <Alert severity="success">login sucessfully</Alert>
          </div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        className="Loginform"
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>University Login</h2>
          </div>
          <br />
          <TextField
            required
            id="outlined-required"
            label="Email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <EmailIcon style={{ color: "#eb2872" }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <br />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <LockIcon style={{ color: "#eb2872" }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <span>
            <a href="/forgotPassword">Forgot Password?</a>
          </span>{" "}
          <div className="button">
            <Button
              onClick={PostData}
              endIcon={<LoginIcon />}
              style={{
                color: " white",
                borderColor: " #eb2872",
                backgroundColor: "#eb2872",
              }}
              variant="contained"
            >
              Sign In
            </Button>
          </div>{" "}
          <br />
        </form>
      </div>
    </div>
  );
};
export default Login;
