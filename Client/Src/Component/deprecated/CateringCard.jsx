import React from 'react'
import "../Styles/CateringCard.css";
import Caterimage from '../Images/caterimage.jpg'
import { Card, ListGroup, ListGroupItem,Button } from "react-bootstrap";
import image2 from "../Images/image2.png"
import {useNavigate} from 'react-router-dom';
const profile = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
const fav = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>
const locatio = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" /><circle cx="12" cy="9" r="2.5" /></svg>
const reviews = <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><g><path d="M20,2H4C2.9,2,2,2.9,2,4v18l4-4h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M20,16H5.17L4,17.17V4h16V16z" /><polygon points="12,15 13.57,11.57 17,10 13.57,8.43 12,5 10.43,8.43 7,10 10.43,11.57" /></g></g></svg>
const CateringCard = ({name,Description,location,id,remove,picture}) => {

  console.log(id)
  const navigate=useNavigate();
  

const RemoveData=async(e)=>{
  
 
  window.alert("Removed From Favourite")
  navigate("/CustomerHome");
  try {
    const res = await fetch(`/RemoveToFav/${id}`, {
      method: "GET",
      headers: {
      
        "Content-Type": "application/json"
      },
      credentials: "include"

    });
   

    const data = await res.json();

    if (!res.status === 200) {
      const error = new Error(res.error);
      throw error;
    }
  } catch (err) {
    console.log(err);
  }



}
const PostData=async(e)=>{
  e.preventDefault();

  const formData = new FormData();
  formData.append("id", id);
  formData.append("name", name);
  formData.append("Description", Description);
  formData.append("location", location);
  formData.append("picture",picture);
  

  try {
    const res = await fetch("/AddToFav", {
      method: "POST",
     
      body: formData

    });
   

    const data = await res.json();

    if (res.status === 500) {
      window.alert("Already Added in Favourite")
      const error = new Error(res.error);
      throw error;
    }else{
      window.alert("Added To Favourite")
    }
  } catch (err) {
    console.log(err);
  }


}




  return (
  
    <Card key={id} style={{ width: '25vmax', height: '27vmax', backgroundColor: "white" }}>
      <Card.Img variant="top" src={picture}  height="200px" />
      <Card.Body>
        <Card.Title>{profile} <a href={`/Caters/${id}`} style={{ color: "Green", textDecoration: "none" }}>{name}</a> </Card.Title>
        <Card.Text >
          <a href={`/Caters/${id}`} style={{ color: "black", textDecoration: "none" }}>{Description}</a>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{locatio}  <a  href={`/Caters/${id}`} style={{ color: "black", textDecoration: "none" }}>{location}</a>   </ListGroupItem>
       
        
        {
          remove?
          <ListGroupItem>{fav} <Button onClick={RemoveData} style={{backgroundColor:"white",color:"black",border:"none"}}> Remove From Favourite</Button>   </ListGroupItem>
           :
           <ListGroupItem>{fav} <Button onClick={PostData} style={{backgroundColor:"white",color:"black",border:"none"}}> Add To favourite </Button>   </ListGroupItem>
        }
      </ListGroup>
      <Card.Body>

      </Card.Body>
    </Card>
    )
  
}

export default CateringCard