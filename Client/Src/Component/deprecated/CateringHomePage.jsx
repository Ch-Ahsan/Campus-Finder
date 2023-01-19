import React, { useEffect,useState } from 'react'
import CateringNavbar from './CateringNavbar';
import CateringSlider from './CateringSlider';
import data from '../Data/data.json';
import Heading from './Heading';
import Footer from './GlobalComponent/Footer';


const CateringHomePage = () => {

 
  const[userData,SetuserData]=useState('');
   const CallHomePage=async(e)=>{
    
    
     try{
       const res=await fetch("/Cateringhome",{
         method:"GET",
         headers:{
           Accept:"application/json",
           "Content-Type":"application/json"
         },
         credentials:"include"
       });

       const data=await res.json();
       SetuserData(data);
     

       if(!res.status===200){
         const error=new Error(res.error);
         throw error;
       }
     }catch(err){
       console.log(err);
     }
   }


  useEffect(() => {
    CallHomePage();
  }, [])
  return (
    <div>
      <div>
        <CateringNavbar name={userData.name}  />
      </div>
      <div >
        <CateringSlider start={data.banner.start1} />

      </div>
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
      <Footer />
    </div>
  )
}

export default CateringHomePage