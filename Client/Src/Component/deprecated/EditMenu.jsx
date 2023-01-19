import React, { useState, useEffect } from 'react';
import CateirngNavbar from './CateringNavbar'
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import Footer from './GlobalComponent/Footer';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

const EditMenu = (props) => {

    const navigate = useNavigate();
    let{ id}=useParams();
  const [userData, SetuserData] = useState('');


 
  const[ProductName,SetProductName]=useState('');
  const[Price,SetPrice]=useState('');
  const[value,SetValue]=useState('');


  const[menuArray,SetmenuArray]=useState({});
  const [Picture, SetPictureName] = useState('');
  const [Picture1, SetPicture] = useState('');

  
  const onChangeFile = e => {
    SetPicture(URL.createObjectURL(e.target.files[0]));
    SetPictureName(e.target.files[0]);
    
  }
 
  const CallHomePage = async (e) => {

   
    try {
      
        console.log(id);
      const res = await fetch(`/ViewMenus/Edit/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      SetuserData(data);
      
      

      const find=data.Menus.find(x=>x._id===id);
      SetmenuArray(find);
      console.log(find)
    
      SetPrice(find.Price);
      SetProductName(find.ProductName)
      SetPictureName(find.Picture)
      

      


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

  const PostData = async (e) => {
    e.preventDefault();
    console.log(ProductName)
    console.log(Price)
    console.log(Picture)

    if(!ProductName || !Price || !Picture || !Picture1  ){
      SetValue("updated2")
  
     }else{
      const formData = new FormData();
      // formData.append("MenuName", MenuName);
       formData.append("ProductName", ProductName);
       formData.append("Price", Price);
       formData.append("Picture", Picture);
   
      
   
       const res = await fetch(`/ViewMenus/Edit/${id}`, {
         method: "POST",
         body: formData
         
       });
       const data = await res.json();
      
     
       console.log(data)
       if (res.status === 400 || !data) {
         SetValue("not")
       } else {
         SetValue("updated")
         navigate("/ViewMenus")
       }
   
   

     }
    
  
  }
  

  return (
    <div>
      <div>
        <CateirngNavbar name={userData.name} />
      </div>
      <div>
      { value==="not" && (<div> <Alert severity="error">invalid data</Alert></div>)}
{ value==="updated" && (<div> <Alert severity="success">Saved sucessfully</Alert></div>)}
{ value==="updated2" && (<div> <Alert severity="error">Feild Cant be Empty</Alert></div>)}
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div>
      
          <h1 style={{ padding: "2vmax" }}>Edit Menu Item</h1>
        </div>
        <div>
          <form method="POST" encType="multipart/form-data">

            

             
                <div >
             

                  <input type="text" placeholder='Enter Description' name="ProductName"
                      onChange={(e)=>SetProductName(e.target.value)} value={ProductName}
                    style={{ marginRight: "1vmax" }} />

                  <input type="Number" placeholder='Enter Price' name="Price" value={Price}
                     onChange={(e)=>SetPrice(e.target.value)} style={{ marginRight: "1vmax" }} /> 

                  <input accept="image/png, image/gif, image/jpeg" type="file" placeholder='Upload Picture' name="Picture" 
                    onChange={onChangeFile} /> <br /> <br />
                   
                   {
                        Picture1?
                        <div style={{borderRadius:"5px"}}>

                        <img src={Picture1} height="200px" width="220px"/>
                        </div>
                        :
                        <div>
                        <img src={Picture1}/>
                        </div>
                   }



                </div>
             
            
            <Button onClick={PostData} style={{ backgroundColor: "green", borderColor: "green", color: "white", marginBottom: "3vmax", marginTop: "4vmax" }} variant='contained' type="submit" >Save Menu</Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default EditMenu