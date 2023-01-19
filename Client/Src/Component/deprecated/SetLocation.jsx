import React from 'react'
import NavbarCustomer from './NavbarCustomer'

const SetLocation = () => {
  return (
    <div>
      <div>
        <NavbarCustomer/>
      </div>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"50px"}}>
      <div>
        <input style={{ width:"500px" }} type="text"/>
      </div>
      <div>
        <h1>Map</h1>
      </div>
      </div>
    </div>
  )
}

export default SetLocation