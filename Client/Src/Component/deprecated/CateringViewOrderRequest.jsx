import React, { useState, useEffect } from 'react'
import CateringNavbar from './CateringNavbar'
import { Card, Button, Form } from "react-bootstrap";
import Popup from 'reactjs-popup';
import purposal from '../Images/purposal.png'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Footer from './GlobalComponent/Footer'
import PaymentPostRequestForm from './PaymentPostRequestForm'
import Heading from './Heading'
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51L32mVKjJZwCXRHyrAD7RXj1Eg48q2afWX3DMk4nupUE7o8OogvwjmQQSqpv7zOwbgK8gzRdUnM5gYLoyuI2Ctlx00L1z2eYhT"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const CateringViewOrderRequest = () => {
  const [userData, SetuserData] = useState('');
  const [PostRequest, SetPostRequest] = useState([]);
  const[Description,SetDescription]=useState('');
  const bb = [].concat(PostRequest).reverse();
   console.log(PostRequest)


  const CallHomePage = async (e) => {


    try {
      const res = await fetch("/CateringViewOrderRequest", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      SetuserData(data);
      console.log(data.PostRequest)
      SetPostRequest(data.PostRequest)


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

  const SendEmail=(id)=>{
    console.log

  }
  return (
    <div>
      <div>
        <CateringNavbar name={userData.name} />
      </div>
      <div>
        {PostRequest?(
          bb.map(Mobj => (
            <Card style={{ backgroundColor: "#F5F5F5", opacity: ".9", width: "50vmax", margin: "1vmax", height: "15vmax", marginLeft: "24vmax" }} className="text-center">
              <Card.Header>{Mobj.CustomerName}</Card.Header>

              <Card.Body>

                <Card.Text>
                  {Mobj.Description}
                </Card.Text>
                <Popup trigger={<Button onClick={SendEmail(Mobj._id)} style={{ backgroundColor: "green", borderColor: "green" }} variant="primary"> Send Purposal </Button>} position="center">
                  <div style={{ border: "1px solid black", backgroundColor: "white", borderRadius: "10px", width: "500px" }}>

                    <Form>

                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                        <Form.Control onChange={(e)=>SetDescription(e.target.value)}  value={Description} style={{ border: "none", borderRadius: "10px" }} as="textarea" rows={6} placeholder="Enter Description of Services" />
                      </Form.Group>
                    
                    

                   
                    </Form>
                    <h4>Pay an Amount of 1500 to send request</h4> <br /> <br />
                          <Elements stripe={stripeTestPromise}>
                            <PaymentPostRequestForm Descrip={Description} CustomerEmail={Mobj.CustomerEmail} />
                          </Elements>


                  </div>
                </Popup>
              </Card.Body>
              <Card.Footer className="text-muted"> Time : {Mobj.Times}, Date:{Mobj.Dates} </Card.Footer>
            </Card>
          )))
          :
          <div>
           <Heading text="No Available Requests"/>
          </div>
        }
      </div>
       <div style={{marginTop:"20vmax"}}>
       <Footer/>
       </div>
     
    </div>
  )
}

export default CateringViewOrderRequest