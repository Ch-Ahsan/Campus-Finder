import React, { useState, useEffect } from 'react';
import NavbarCustomer from './NavbarCustomer';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import image2 from '../Images/image2.png';
import Footer from './GlobalComponent/Footer';
import CateringNavbar from './CateringNavbar';
import Heading from './Heading';
import { useNavigate } from 'react-router-dom';
const CateringOrderPage = () => {
  const [userData, SetUserData] = useState('');
  const [orderDetails, SetOrderDetails] = useState([]);
  const [Menu, SetMenu] = useState([]);
  const navigate = useNavigate();
  console.log(Menu);
  const bb = [].concat(orderDetails).reverse();

  const CallHomePage = async (e) => {
    try {
      const res = await fetch('/getCateringOrder', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = await res.json();
      SetUserData(data.User);
      SetOrderDetails(data.result);
      SetMenu(data.OrderMenu);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
        window.alert('User has not received any order');
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    CallHomePage();
  }, []);
  // if(bb.length==0){
  //   alert("User dont have any Orders yet")
  //   navigate("/CateringHome")
  //  }
  return (
    <div>
      <div>
        <CateringNavbar name={userData.name} />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '3vmax',
          flexWrap: 'wrap',
          height: '100%',
        }}
      >
        {orderDetails ? (
          bb.map((Mobj) => (
            <Card
              style={{
                backgroundColor: '#F5F5F5',
                opacity: '.9',
                width: '50vmax',
                margin: '1vmax',
                height: '15vmax',
              }}
              className='text-center'
            >
              <Card.Header>{Mobj?.Status}</Card.Header>

              <Card.Body>
                <Card.Title>{Mobj?.CustomerName}</Card.Title>

                <Button
                  style={{
                    backgroundColor: 'green',
                    borderColor: 'green',
                    marginTop: '25px',
                  }}
                  variant='primary'
                >
                  {' '}
                  <a
                    style={{ textDecoration: 'none', color: 'white' }}
                    href={`/CateringOrderDetails/${Mobj?._id}`}
                  >
                    See Details
                  </a>{' '}
                </Button>
              </Card.Body>
              <Card.Footer className='text-muted'>{Mobj?.dates}</Card.Footer>
            </Card>
          ))
        ) : (
          <h1>No Order Yet</h1>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CateringOrderPage;
