import React,{useState,useEffect} from 'react';
import NavbarCustomer from './NavbarCustomer';
import CateringCard from './CateringCard'
import Footer from './GlobalComponent/Footer'

const FavouriteInterface = () => {
    const [userData, SetuserData] = useState('');
    const[CaterData,SetCaterData]=useState([]);
 
   console.log(CaterData)

  const CallHomePage = async (e) => {


    try {
      const res = await fetch("/GetFav", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      SetuserData(data.user);
      SetCaterData(data.cater)


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
        </div>
        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
            {
                CaterData?.map(Mobj=>(
                     
                    <CateringCard name={Mobj.name} Description={Mobj.Description} location={Mobj.location} id={Mobj.CateringID} picture={Mobj.picture} remove="remove"/>

                ))
            }
          
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default FavouriteInterface