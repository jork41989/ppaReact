import React from "react";

export default function WebinarTop() {

  return(
    <div className="contentMain form_info_back" id="form_info">
      <div className="webinar">
        <div className="webinar_info">
          <div className="live_Div">
            <p className="live_h2">LIVE</p>
            <p className="zoom_h2">ZOOM WEBINAR</p>
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
          <div className="webinar_timedate">
            <div className="webinar_time">
              <div className="cal_icon circle">
                <i className="far fa-calendar-alt cal_icon"></i>
              </div>
              <p className="top_p">OCT</p>
              <p className="boldMe">29</p>
            </div>
            <div className="webinar_date">
              <div className="clock_icon circle">
                <i className="far fa-clock"></i>
              </div>
              <p className="boldMe top_p">05</p>
              <p>PM</p>
            </div>
          </div>
          <div className="webinar_logo_div">
            <img src="/images/ppav1.svg" alt="logo" className="logo_small"/>
          </div>
          </div>
        </div>
  )
}