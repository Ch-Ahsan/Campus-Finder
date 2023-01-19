import { useEffect, useRef,useState } from 'react'
import jwt_decode from "jwt-decode";
import Registration from './Registration'
import {Link, useNavigate} from 'react-router-dom';
  const loadScript = (src) =>
  new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve()
    const script = document.createElement('script')
    script.src = src
    script.onload = () => resolve()
    script.onerror = (err) => reject(err)
    document.body.appendChild(script)
  })

const GoogleAuth = () => {

    const navigate = useNavigate();

  const googleButton = useRef(null);


  useEffect(() => {
    const src = 'https://accounts.google.com/gsi/client'
    const id = "990905337031-m46gssrimfjg8bj52r204ial7j61s7d0.apps.googleusercontent.com"

    loadScript(src)
      .then(() => {
        /*global google*/
        console.log(google)
        google.accounts.id.initialize({
          client_id: id,
          callback: handleCredentialResponse,
        })
        google.accounts.id.renderButton(
          googleButton.current, 
          { theme: 'outline', size: 'large' } 
        )
      })
      .catch(console.error)

   
  }, [])

  function handleCredentialResponse(response) {
   // console.log("Encoded JWT ID token: " + response.credential);
     var userObject=jwt_decode(response.credential);
    console.log(userObject.name)
    console.log(userObject.email)
     let Name=userObject.name;
     let Email=userObject.email;

    navigate('/Registration',{state:{name:{Name},email:{Email}}});
    //<Registration name={Name} email={Email}/>

   
    
  }

  return (
    <div ref={googleButton}></div>
  )
}

export default GoogleAuth