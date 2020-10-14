import React, { useEffect, useState } from "react";
import isValidZipcode from "is-valid-zipcode"
import MenuItem from '@material-ui/core/MenuItem';
import * as EmailValidator from 'email-validator';
import {isValidPhone} from 'phone-validation'
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import './form.css'
import { Select } from "@material-ui/core";

export default function WebinarForm() {

  const [formData, setFormData] = useState({firstName:"", lastName: "", email:"", phone: "", address:"", city:"", state:"", zipcode:""})
  const [badData, setBadData] = useState(true)

  let changer = (e) =>{
    console.log(e.target.name)
    let type = e.target.id
    let val = e.target.value
    let oldData = formData
    if(type === "zipcode"){
      console.log(isValidZipcode(val))
    } else if (type === "email"){
      console.log(EmailValidator.validate(val))
    } else if (type === "phone"){
      console.log(isValidPhone(val))
    }
    oldData[type] = val
    setFormData(oldData)
    console.log(formData)
  }
  
  let stateAbr = (e) =>{

    let val = e.target.value
    let oldData = formData
    oldData.state = val
    setFormData(oldData)
    console.log(formData)
  }

  let submitter = (e) =>{
    e.preventDefault()

  } 



  return (
    <div className="contentMain backg3" id="form_body">
      <div className="formBack">
        <form name="register" id="registerForm">
          <div className="formTop">
            <TextField type="text" name="first_name" id="firstName" placeholder="First Name" onChange={changer} />
            <TextField type="text" name="last_name" id="lastName" placeholder="Last Name" onChange={changer} />
            <Input type="email" name="email" id="email" placeholder="Email" onChange={changer} />
            <Input type="tel" name="phone" id="phone" placeholder="Phone Number" onChange={changer} />
          </div>
          <div className="addressDiv">
            <Input type="text" name="address" id="address" placeholder="Address" classes={{root: "address"}} onChange={changer} />
          </div>
          <div className="formMid">

            <TextField type="text" name="city" id="city" placeholder="City" onChange={changer} />
            <Select type="text" name="state" id="state" placeholder="State" onChange={stateAbr} value={formData.state}>
              <MenuItem value={"AL"}>AL</MenuItem>
              <MenuItem value={"AK"}>AK</MenuItem>
              <MenuItem value={"AZ"}>AZ</MenuItem>
              <MenuItem value={"AR"}>AR</MenuItem>
              <MenuItem value={"CA"}>CA</MenuItem>
              <MenuItem value={"CO"}>CO</MenuItem>
              <MenuItem value={"CT"}>CT</MenuItem>
              <MenuItem value={"DE"}>DE</MenuItem>
              <MenuItem value={"DC"}>DC</MenuItem>
              <MenuItem value={"FL"}>FL</MenuItem>
              <MenuItem value={"GA"}>GA</MenuItem>
              <MenuItem value={"HI"}>HI</MenuItem>
              <MenuItem value={"ID"}>ID</MenuItem>
              <MenuItem value={"IL"}>IL</MenuItem>
              <MenuItem value={"IN"}>IN</MenuItem>
              <MenuItem value={"IA"}>IA</MenuItem>
              <MenuItem value={"KS"}>KS</MenuItem>
              <MenuItem value={"KY"}>KY</MenuItem>
              <MenuItem value={"LA"}>LA</MenuItem>
              <MenuItem value={"ME"}>ME</MenuItem>
              <MenuItem value={"MD"}>MD</MenuItem>
              <MenuItem value={"MA"}>MA</MenuItem>
              <MenuItem value={"MI"}>MI</MenuItem>
              <MenuItem value={"MN"}>MN</MenuItem>
              <MenuItem value={"MS"}>MS</MenuItem>
              <MenuItem value={"MO"}>MO</MenuItem>
              <MenuItem value={"MT"}>MT</MenuItem>
              <MenuItem value={"NE"}>NE</MenuItem>
              <MenuItem value={"NV"}>NV</MenuItem>
              <MenuItem value={"NH"}>NH</MenuItem>
              <MenuItem value={"NJ"}>NJ</MenuItem>
              <MenuItem value={"NM"}>NM</MenuItem>
              <MenuItem value={"NY"}>NY</MenuItem>
              <MenuItem value={"NC"}>NC</MenuItem>
              <MenuItem value={"ND"}>ND</MenuItem>
              <MenuItem value={"OH"}>OH</MenuItem>
              <MenuItem value={"OK"}>OK</MenuItem>
              <MenuItem value={"OR"}>OR</MenuItem>
              <MenuItem value={"PA"}>PA</MenuItem>
              <MenuItem value={"RI"}>RI</MenuItem>
              <MenuItem value={"SC"}>SC</MenuItem>
              <MenuItem value={"SD"}>SD</MenuItem>
              <MenuItem value={"TN"}>TN</MenuItem>
              <MenuItem value={"TX"}>TX</MenuItem>
              <MenuItem value={"UT"}>UT</MenuItem>
              <MenuItem value={"VT"}>VT</MenuItem>
              <MenuItem value={"VA"}>VA</MenuItem>
              <MenuItem value={"WA"}>WA</MenuItem>
              <MenuItem value={"WV"}>WV</MenuItem>
              <MenuItem value={"WI"}>WI</MenuItem>
              <MenuItem value={"WY"}>WY</MenuItem>
            </Select>
            <Input type="number" name="zip" id="zipcode" placeholder="Zipcode" onChange={changer} />
          </div>

          <Input type="submit" value="Register"/>
        </form>
      </div>

     </div>
  )
}