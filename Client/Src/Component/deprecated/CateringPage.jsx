import React, { useState, useEffect } from 'react'
import NavbarCustomer from './NavbarCustomer'
import Table from 'react-bootstrap/Table'
import Heading from './Heading'
import caterimage from "../Images/caterimage.jpg"
import Button from 'react-bootstrap/Button'
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import Footer from './GlobalComponent/Footer'
import { useParams } from "react-router-dom";
import MenuCard from './MenuCard';
import Basket from './Basket';
import {useNavigate} from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


const profil =<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/></svg>
const comment = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"/></svg>
const CateringPage = () => {
  
  let { id } = useParams();

  const [userData, SetuserData] = useState('');
  const [CaterData, SetCaterData] = useState('');
  const [Menu, SetMenu] = useState([]);
  const[Comments,SetComments]=useState([]);
 
  const [Price, SetPrice] = useState('');
  const [cartItems, SetCartItems] = useState([]);
  console.log(Comments);
 
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist) {
      SetCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      SetCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist.qty === 1) {
      SetCartItems(cartItems.filter((x) => x._id !== product._id));
    } else {
      SetCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const CallHomePage = async (e) => {


    try {
      const res = await fetch(`/Cater/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      SetuserData(data.User);

      SetCaterData(data.result);
      SetMenu(data.result.Menus);
      SetComments(data.result.Comment);
     

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

  const PostData = async (ids) => {

    const value = Menu.find(o => o._id === ids);
    console.log(value);

    try {
      const res = await fetch("/CartValue", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          value, CaterData
        })

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
 
  return (
    <div>
      <div>
        <NavbarCustomer name={userData.name} />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between",alignItems:"space-between" }}>
        
         
        
        <div>
        <h1>{CaterData.name}</h1>
        <Heading text="Menus " />
                        <Table striped bordered hover>
                            <thead>
                                <tr>
        
                                    <th>Product Name/Desription</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>Operations</th>
                                </tr>
                            </thead>
           
               
                        
                            <tbody>
                            {
                    Menu?.map(Mobj=>(
                        
                        
                                <tr key={Mobj._id}>
                                  
                                    <td >{Mobj.ProductName}</td>
                                    <td >{Mobj.Price}</td>
                                    <td> <img src={`/Upload/${Mobj.Picture}`} alt="" height="120vmax" width="250vmax" /> </td>
                                    <td> <Button onClick={() => onAdd(Mobj)} style={{ backgroundColor: "green", borderColor: "green" }} variant="primary">Add to Cart</Button></td>
                                </tr>
                              
                    )   
                      

                    )}
                    
                
                 </tbody>
                  </Table>
        </div>
      
      
    
       
         
       
        <div style={{  width: "500px" }}>
          <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
            Caterid={CaterData._id}
            CateringName={CaterData.name}
            location={userData.address}
            contacts={userData.contact}
          ></Basket>
        </div>

      </div>


      <div>
        <Heading text="Reviews & Comments" />
        <div style={{ display: "flex", flexDirection: "row", backgroundColor: "#F5F5F5",flexWrap:"wrap" }}>
         
          {
            
            Comments?.map(Mobj=>(
              <div >
              <Card style={{ backgroundColor: "white",height:"100px" }}>
              <Card.Body>
                <h5 style={{ color: "black" }}>{Mobj.Username}</h5>
                <p style={{ color: "black" }}>{Mobj.CateringComment}</p>
             
                <Rating name="read-only" value={Mobj.Value} readOnly />
              </Card.Body>
            </Card>
            </div>
            ))
          }
            
         
         
        </div>
      </div>
      <Footer />

    </div>

  )
}

export default CateringPage