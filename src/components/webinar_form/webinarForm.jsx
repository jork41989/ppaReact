import React from "react";


import './form.css'
import FormFrame from "./formFrame";



// import gapi from "gapi"
// const API_KEY = process.env.API_KEY || require('../../config/keys').API_KEY
// const CLIENT_ID = process.env.CLIENT_ID || require('../../config/keys').CLIENT_ID
// const SPREADSHEET_ID = process.env.SPREADSHEET_ID || require('../../config/keys').SPREADSHEET_ID;
// const SCOPE = process.env.SCOPE || require('../../config/keys').SCOPE

export default function WebinarForm() {


  return (
    <div className="contentMain backg3" id="form_body">
      
        <FormFrame/>
     </div>
  )
  
}