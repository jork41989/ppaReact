import React from "react";

export default function FormFrame() {


  return(
      <div className="formBack">
        {/* <WebinarFormFeilds changer={changer} stateAbr={stateAbr} formErrors={formErrors} submitter={submitter} /> */}
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSctsyMUl0sFceVWJjzOC5uvz8rrrQnBI13UjMji7bMNNFUBbQ/viewform?embedded=true" className="formFrame" title="PPAForm" id="formFrame">Loading…</iframe>
      </div>
  )
}