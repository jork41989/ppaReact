import React from "react";
import { Link } from 'react-router-dom'

export default function WebinarHome() {
  return (
    <div className="contentMain" id="webinar">
      <div className="webinar">
        <div className="webinar_info">
          <div className="live_Div">
            {/* <p className="live_h2">LIVE</p> */}
            <p className="zoom_h2">WEBINAR</p>
          </div>
          <p className="webinar_byline">
            BUILDING A PERSONAL PREPAREDNESS PLAN
            </p>
        </div>
        <div className="webinar_image">
          <img src="/images/PPA_group_webinar.png" alt="group_shot"/>
          </div>
        </div>
        <div className="webinar_details">
          <div className="webinar_logo_div">
            <img src="/images/ppav1.svg" alt="logo" className="logo_small"/>
          </div>
          </div>
        <Link to={'/register'} className="reg_button">WATCH NOW!</Link>

        </div>
  )
}