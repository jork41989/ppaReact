import React from "react";


import './form.css'



// import gapi from "gapi"
// const API_KEY = process.env.API_KEY || require('../../config/keys').API_KEY
// const CLIENT_ID = process.env.CLIENT_ID || require('../../config/keys').CLIENT_ID
// const SPREADSHEET_ID = process.env.SPREADSHEET_ID || require('../../config/keys').SPREADSHEET_ID;
// const SCOPE = process.env.SCOPE || require('../../config/keys').SCOPE

export default function WebinarForm() {




  return (
    <div className="contentMain backg3" id="form_body">
      <div className="formBack">
        {/* <WebinarFormFeilds changer={changer} stateAbr={stateAbr} formErrors={formErrors} submitter={submitter} /> */}
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSctsyMUl0sFceVWJjzOC5uvz8rrrQnBI13UjMji7bMNNFUBbQ/viewform?embedded=true" className="formFrame" title="PPAForm">Loading…</iframe>
      </div>

     </div>
  )
}