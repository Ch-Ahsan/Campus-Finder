import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import { Card, ListGroup, ListGroupItem, Form, Button } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';

const CARD_OPTIONS = {
   
	iconStyle: "solid",
	style: {
		base: {
           
			iconColor: "black",
			color: "black",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "black" },
			"::placeholder": { color: "black" }
		},
		invalid: {
			iconColor: "black",
			color: "black"
		}
	}
}

export default function PaymentPostRequestForm({Descrip,CustomerEmail}) {

    const navigate=useNavigate();
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
   


    const handleSubmit = async (e) => {
        e.preventDefault()
      if(!Descrip){
        return window.alert("Invalid data")
      }
        console.log("hello")
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
  

    if(!error) {
       

        
        try {
            const {id} = paymentMethod
            
           
            const response = await axios.post("/PostRequestpayment", {
              Descrip,CustomerEmail,id

            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }
            navigate('/ConfirmationOrder',{state:{CustomerEmail:{CustomerEmail}}});

        } catch (error) {
            console.log("Error", error)
        }
    
    } else {
        console.log(error.message)
        window.alert("invalid data")
    }

}

    return (
        <>
        {!success ? 
        <form >
            <fieldset className="FormGroup">
                <div>
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>

            <Button onClick={handleSubmit} style={{ backgroundColor: "green", borderColor: "green",marginTop:"40px" }} variant="primary">Pay 1500 RS </Button>
        </form>
        :
       <div>
           <h2>Payment Has been done Successfully</h2>
       </div> 
        }
            
        </>
    )
}
