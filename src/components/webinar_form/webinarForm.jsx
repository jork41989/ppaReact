import React, { useEffect, useState } from "react";

export default function WebinarForm() {

  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [address, setAddress] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [zipcode, setZipcode] = useState()

  let changer = (e) =>{
    console.log(e.target.id)
    let type = e.target.id
    let val = e.target.value
    if(type === "firstName"){
      setFirstName(val)
    } else if (type === "lastName") {
      setLastName(val)
    } else if (type === "email") {
      setEmail(val)
    } else if (type === "phone") {
      setPhone(val)
    } else if (type === "address") {
      setAddress(val)
    } else if (type === "city") {
      setCity(val)
    } else if (type === "state") {
      setState(val)
    } else if (type === "zipcode") {
      setZipcode(val)
    }
  }


  return (
    <div class="contentMain backg3" id="form_body">
      <div>
        <form name="register" id="registerForm">
          <input type="text" name="first_name" id="firstName" placeholder="First Name" onChange={changer}/>
          <input type="text" name="last_name" id="lastName" placeholder="Last Name"/>
          <input type="email" name="email" id="email" placeholder="Email"/>
          <input type="tel" name="phone" id="phone" placeholder="Phone Number"/>
          <input type="text" name="address" id="address" placeholder="Address"/>
          <input type="text" name="city" id="city" placeholder="City"/>
          <input type="text" name="state" id="state" placeholder="State"/>
          <input type="number" name="zip" id="zipcode" placeholder="Zipcode"/>
          <input type="submit" value="Register"/>
        </form>
      </div>

     </div>
  )
}