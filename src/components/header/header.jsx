import React from "react";
import $ from "jquery";
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
export default function Header(){

  let scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }

  return(
    <div className="header">
      <Link to="/"><img src="/images/ppav1.svg" alt="logo" className="logoHead"/></Link>
        <div className="links">
          <HashLink to={"/#vision"} className="headerButton">Our Vision</HashLink>
          <HashLink to={"/#mission"} className="headerButton" scroll={el => scrollWithOffset(el)}>Mission Statement</HashLink>
          <HashLink to={"/#team"} className="headerButton" scroll={el => scrollWithOffset(el)}>Meet Us</HashLink>
          <a href="tel:561-486-9616" className="headerButton">Call Now 561-486-9616</a>
        </div>
     </div>
  )
}