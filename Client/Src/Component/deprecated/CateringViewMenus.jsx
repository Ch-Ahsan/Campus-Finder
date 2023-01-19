import React,{useState,useEffect} from 'react'
import CateringNavbar from './CateringNavbar'
import Heading from './Heading'
import Table from 'react-bootstrap/Table'
import caterimage from "../Images/caterimage.jpg"
import Button from 'react-bootstrap/Button'
import Footer from './GlobalComponent/Footer'

const CateringViewMenus = () => {

    const[userData,SetuserData]=useState('');
    const[menuArray,SetmenuArray]=useState([]);
    const CallHomePage=async(e)=>{
    
        
        try{
          const res=await fetch("/ViewMenus",{
            method:"GET",
            headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
            },
            credentials:"include"
          });
   
          const data=await res.json();
          SetuserData(data);
          SetmenuArray(data.Menus);
          
         
   
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
    console.log(menuArray);
 
    return (
        <div>
            <div>
                <CateringNavbar name={userData.name} />
            </div>
            <div>
                        <Heading text="Menus & Custom Packages" />
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
                    menuArray?.map(Mobj=>(
                        
                        
                                <tr key={Mobj._id}>
                                  
                                    <td >{Mobj.ProductName}</td>
                                    <td >{Mobj.Price}</td>
                                    <td> <img src={`/Upload/${Mobj.Picture}`} alt="" height="120vmax" width="250vmax" /> </td>
                                    <td>  <Button style={{ backgroundColor: "green", borderColor: "green", marginRight: "10px" }} variant="primary"> <a style={{ textDecoration: "none", color: "white" }} href={`/ViewMenus/Edit/${Mobj._id}`}>Edit</a> </Button>
                                        <Button style={{ backgroundColor: "green", borderColor: "green" }} variant="primary"> <a style={{ textDecoration: "none", color: "white" }} href={`/ViewMenus/Delete/${Mobj._id}`}>Delete</a> </Button></td>
                                </tr>
                              
                    )   
                      

                    )}
                    
                
                 </tbody>
                  </Table>
                        </div>

                
               

           
            <Footer/>

        </div>
    )
}

export default CateringViewMenus