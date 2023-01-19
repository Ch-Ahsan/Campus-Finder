import React, { useState, useEffect } from 'react'
import banner from '../Data/data.json';
import data from '../Data/data.json';
import NavbarCustomer from './NavbarCustomer';
import Slider from './Slider';
import CustomerOptions from './CustomerOptions';
import "../Styles/CustomerHome.css";
import Heading from './Heading';
import icons from '../Images/icons.png';
import custom from '../Images/custom.png'
import vieworder from '../Images/vieworder.png';
import favorite from '../Images/favorite.png';
import CateringCard from './CateringCard';
import Footer from './GlobalComponent/Footer';
import mapp from "../Images/mapp.jpg";
import customrequest from "../Images/customrequest.png";
import checkorder from "../Images/checkorder.jpg"
import ExtendNavbar from './ExtendNavbar';
import { Col, Row } from "react-bootstrap";

const location = <svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" /><circle cx="12" cy="9" r="2.5" /></svg>
export const CustomerHome = () => {



  const [userData, SetuserData] = useState('');
  const[latitude,SetLatitude]=useState('');
  const[longitude,SetLongitude]=useState('');
  const[userAddress,SetuserAddress]=useState('');
 

  const CallHomePage = async (e) => {


    try {
      const res = await fetch("/CustomerHome", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      SetuserData(data);
      console.log(data)


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
  return (
    <div>
      <div>
        <NavbarCustomer name={userData.name} />
        <Slider start={data.banner.start} />
 
      </div>
      {/* <div className='options'>
           <CustomerOptions route="/post"option="Set Location" image={mapp}/>
           <CustomerOptions  route="/post" option="Post Custom Request" image={customrequest}/>
           <CustomerOptions  route="/order" option="View Orders" image={checkorder}/>
         
        </div> */}
      
      <div className='catercard'>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div>
          <Heading text="About US" />
        </div>
        <div style={{ width: "70%" }}>
          <p>Catering Service provider company will receive a 10% raise on the cost of the product.
            During this time, the company will have the option if for example it can pay off its debts
            or provide a refund. When a company begins its financial planning process, it is advised that if the
            company continues to operate at a profit, it is advised to make the necessary changes in its business
            model to achieve its plan for financial stability. For example, if the company enters into a
            restructuring plan and then goes negative, the impact of such changes can be enormous. The impact
            of such a change will be felt with regard to the amount of debt incurred, the scope of the restructuring
            and how the company can ensure that the company meets its current cash needs while maintaining its
            performance. The company will require that the business remain under control for at least one year before its decision to close at any price. During this time, the company will receive an update to the debt, including the amounts the company is required to repay,</p>
        </div>
      </div>
       







      </div>
      <div>
        <Heading text="" />
        <Footer />
      </div>

    </div>

  )
}

export default CustomerHome;
