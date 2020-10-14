import React, { useState } from "react";
import isValidZipcode from "is-valid-zipcode"
import WebinarFormFeilds from './webinarFromFields'

import * as EmailValidator from 'email-validator';

import './form.css'

import Axios from "axios";

// import gapi from "gapi"
// const API_KEY = process.env.API_KEY || require('../../config/keys').API_KEY
// const CLIENT_ID = process.env.CLIENT_ID || require('../../config/keys').CLIENT_ID
// const SPREADSHEET_ID = process.env.SPREADSHEET_ID || require('../../config/keys').SPREADSHEET_ID;
// const SCOPE = process.env.SCOPE || require('../../config/keys').SCOPE

export default function WebinarForm() {

  const [formData, setFormData] = useState({firstName:"", lastName: "", email:"", phone: "", address:"", city:"", state:"", zipcode:""})
  const [formErrors, setFormErrors] = useState({ firstName: false, lastName: false, email: false, phone: false, address: false, city: false, state: false, zipcode: false })
  const [badData, setBadData] = useState()

  let changer = (e) =>{
 
    let type = e.target.id
    let val = e.target.value
    let oldData = formData
    if(type === "zipcode"){
      console.log(isValidZipcode(val))
      console.log(document.getElementById("zipcode"))
    } else if (type === "email"){
      console.log(EmailValidator.validate(val))
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

  let submitter = async (e) =>{
    e.preventDefault()
    console.log("submitting")
    
    await checks()
      .then(

        sendData(Object.values(formData))
      )
    // const params = {
    //   spreadsheetId: SPREADSHEET_ID,
    //   range: 'Sheet1',
    //   valueInputOption: 'RAW',
    //   insertDataOptions: 'INSERT_ROWS'
    // }
    // const valueRangeBody = {
    //   'majorDimension': 'ROWS',
    //   'values': [Object.values(formData)]
    // }
    // console.log(badData)
    // if(!badData){
    //   // let request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody)
    //   // try{
    //   //   let res = request
    //   //   console.log(res)
    //   // } catch(err){
    //   //   console.log(err)
    //   // }
    //   sendData(Object.values(formData))
    // }

      
  } 

  let checks = async () =>{
    let oldErrors = formErrors
    setBadData(false)
    if (formData.state === '') {
      debugger
      setBadData(true)
      oldErrors.state = true
      setFormErrors(oldErrors)
      console.log("state")
    }
    if (!isValidZipcode(formData.zipcode)) {
      setBadData(true)
      oldErrors.zipcode = true
      setFormErrors(oldErrors)
      console.log("zip")
    }

    if (!EmailValidator.validate(formData.email)) {
      setBadData(true)
      oldErrors.email = true
      setFormErrors(oldErrors)
      console.log("email")
    }
    console.log(badData)
  }

  let sendData = async (formInfo) => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzLoUFtN_Ma4SE7uZsd6Bav9f5dknpQvbaK5cK3AdBC3MuS_CJz/exec'
    console.log("testing")
    Axios.get(scriptURL, formInfo.serializeObject())
      .then(res => console.log(res))


  }


  // let handleClientLoad = () =>{
  //     gapi.load('client:auth2', initClient)
  // }

  // let initClient = () => {
  //   gapi.client.init({
  //     'apiKey': API_KEY,
  //     'clientId': CLIENT_ID,
  //     'scope': SCOPE,
  //     'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4']
  //   }).then(()=>{
  //     gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSignInStatus);
  //     this.updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  //   })
  // }



  return (
    <div className="contentMain backg3" id="form_body">
      <div className="formBack">
        <WebinarFormFeilds changer={changer} stateAbr={stateAbr} formErrors={formErrors} submitter={submitter} />
      </div>

     </div>
  )
}