import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useState } from 'react';
import { Card, ListGroup, ListGroupItem, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: 'black',
      color: 'black',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': { color: 'black' },
      '::placeholder': { color: 'black' },
    },
    invalid: {
      iconColor: 'black',
      color: 'black',
    },
  },
};

export default function PaymentForm({
  payment,
  Items,
  Catid,
  CateringNames,
  address,
  contact,
}) {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        console.log(Catid);
        const response = await axios.post('/payment', {
          payment,
          id,
          Catid,
          Items,
          CateringNames,
          address,
          contact,
        });

        if (response.data.success) {
          console.log('Successful payment');
          setSuccess(true);
        }
        navigate('/order');
      } catch (error) {
        console.log('Error', error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      {!success ? (
        <form>
          <fieldset className='FormGroup'>
            <div style={{border:"2px solid #dbdad7",padding:'15px'}}>
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>

          <Button
            onClick={handleSubmit}
            style={{
              backgroundColor: 'green',
              borderColor: 'green',
              marginTop: '40px',
            }}
            variant='primary'
          >
            Pay{payment} RS{' '}
          </Button>
        </form>
      ) : (
        <div>
          <h2>Payment Has been done Successfully</h2>
        </div>
      )}
    </>
  );
}
