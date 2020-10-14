import React from "react";

export default function Team() {
  return (
    <div className="contentMain backg3" id="team">
      <h1 className="mainH1v2">Meet The Alliance</h1>
      <div className="members">
        <div className="member">
          <a href="https://www.thegardens.com" target="_blank" className="memberA">
            <img src="/images/jacobs.png" alt="jacobs" className="memberImg"/>
            </a>
            <h2 className="mainH1v2">Garrett & Marshall Jacobs</h2>
            <p className="memberComp">The Gardens of Boca Raton Cemetery and Funeral Home</p>
            <a href="tel:561-989-9190" className="memberLink">(561) 989-9190</a>
            <a href="mailto:marshall@thegardens.com" className="memberLink">marshall@thegardens.com</a>
          </div>

          <div className="member">
            <a href="https://www.howardkayeinsurance.com" target="_blank" className="memberA">
              <img src="/images/kayev2.png" alt="Kaye" className="memberImg"/></a>
              <h2 className="mainH1v2">HOWARD KAYE</h2>
              <p className="memberComp">Howard Kaye Insurance Agency, LLC.</p>
              <a href="tel:561-417-5883" className="memberLink">(561) 417-5883</a>
              <a href="mailto:hkaye@howardkayeinsurance.com" className="memberLink">hkaye@howardkayeinsurance.com</a>
          </div>

            <div className="member">
              <a href="https://www.nelsonmullins.com/people/john-raymond" target="_blank" className="memberA">
                <img src="/images/raymondv2.png" alt="raymond" className="memberImg"/>
            </a>
                <h2 className="mainH1v2">John J. Raymond</h2>
                <p className="memberComp">Attorney Partner Nelson Mullins Estate/Gift Tax Law</p>
                <a href="tel:561-659-8661" className="memberLink">(561) 659-8661</a>
                <a href="mailto:john.raymond@nelsonmullins.com" className="memberLink">john.raymond@nelsonmullins.com</a>
          </div>

            </div>


          </div>
    )}