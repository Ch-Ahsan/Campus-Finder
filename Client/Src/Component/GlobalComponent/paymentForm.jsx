import { Button } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useState } from 'react';
import { Card, ListGroup, ListGroupItem, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PaidIcon from '@mui/icons-material/Paid';
import CircularProgress from '@mui/material/CircularProgress';

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: 'black',
      color: 'black',
      border:'2px solid black',
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
 data,
 payment
}) {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const[loading,setLoading]=useState(false);
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const{email,password,uniName,username}=data;
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        console.log(data)
        const response = await axios.post('/modulePayment', {
          payment,
          email,
          password,
          uniName,
          username,
          id         
        });
        console.log(response)
        if (response.data.status===400) {
            window.alert('Already Registered');
            setLoading(false)
         
        }else{
            window.alert('Email has been sent wait for confirmation');
            setSuccess(true);
            setLoading(false)
            navigate('/portalLogin')

        }
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
            <div style={{padding:"5px",border:'2px solid #e0e0de',width:'425px'}}>
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>

          <Button
            onClick={handleSubmit}
            endIcon={loading?<CircularProgress />:<PaidIcon />}
            style={{
              color: ' white',
              borderColor: ' #eb2872',
              backgroundColor: '#eb2872',
              marginTop: '40px',
            }}
            disabled={data.uniName && data.username && data.email && data.password?false:true}
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
