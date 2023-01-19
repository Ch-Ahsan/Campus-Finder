import React from 'react';
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import StripeCheckout from 'react-stripe-checkout'

import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51L32mVKjJZwCXRHyrAD7RXj1Eg48q2afWX3DMk4nupUE7o8OogvwjmQQSqpv7zOwbgK8gzRdUnM5gYLoyuI2Ctlx00L1z2eYhT"

const stripeTestPromise = loadStripe(PUBLIC_KEY)




export default function Basket(props) {
  const { cartItems, onAdd, onRemove,Caterid,CateringName,location,contacts } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.Price, 0);
  

  const totalPrice = itemsPrice;
  return (
    <div>
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-3">{item.ProductName}</div>
            <div className="col-3">
              <button style={{ backgroundColor: "green", borderColor: "green", color: "white" }} onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button style={{ backgroundColor: "green", borderColor: "green", color: "white" }} onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-4 text-right">
              {item.qty} x {item.Price} RS
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-4">Items Price</div> <br />
              <div className="col-2 text-right">{itemsPrice} RS</div>
            </div>


            <div className="row">
              <div className="col-4">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>{totalPrice} RS</strong>
              </div>
            </div>
            <hr />
            <div style={{marginTop:"80px"}}>
              <span>Note: if you change the location the cart will be removed</span> <br /> <br />
               <span> <b> <a style={{textDecoration:"none",fontSize:"large",color:"black"}} href="/CustomerHome">Delivered To:</a> </b> {location}</span> <br /> <br />
               <h5>Pay Through Credit Card</h5> <br /> <br />
              <Elements stripe={stripeTestPromise}>
                <PaymentForm payment={parseFloat(totalPrice)} Items={cartItems} Catid={Caterid} CateringNames={CateringName} address={location} contact={contacts} />
              </Elements>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

