import React,{useState,useEffect} from 'react'

const useGeoLocation = () => {

    const[location,SetLocation]=useState({
        loaded:false,
        coordinates:{lat:"",lng:""},

    });

    const onSuccess=(location)=>{
        SetLocation({
            loaded:true,
            coordinates:{
                lat:location.coords.latitude,
                lng:location.coords.longitude,
            },
        });
    };
    const onError=(error)=>{
        
        SetLocation({
            loaded:true,
             error,
        
    });
    }
    
    useEffect(()=>{
        if(!("geolocation" in navigator)){
            onError({
                code:0,
                message:"Geolocation not supported",

            });
           
        }

        navigator.geolocation.getCurrentPosition(onSuccess,onError);
    },[])
  
  return location;
}

export default useGeoLocation