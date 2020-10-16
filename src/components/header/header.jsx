import React from "react";
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { useMediaQuery } from 'react-responsive'
import Drawer from '@material-ui/core/Drawer';
import './header.css'
export default function Header(){
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -150;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }

  const isMobile = useMediaQuery({ query: '(max-width: 600px)' })


  let sizeCheck = () =>{
    if(isMobile){
      return  <div className="menuButtonDiv">
                <i className="fas fa-bars" onClick={handleDrawerOpen}></i>
                <Drawer
                  className="drawer"
                  variant="persistent"
                  anchor="left"
                  open={open}>
                    < div className="links burger_links" >
                      <i class="fas fa-arrow-circle-right" onClick={handleDrawerClose}></i>
                      <HashLink to={"/#vision"} className="headerButton burger_button" onClick={handleDrawerClose}>Our Vision</HashLink>
                      <HashLink to={"/#mission"} className="headerButton burger_button" scroll={el => scrollWithOffset(el)} onClick={handleDrawerClose}>Mission Statement</HashLink>
                      <HashLink to={"/#team"} className="headerButton burger_button" scroll={el => scrollWithOffset(el)} onClick={handleDrawerClose}>Meet Us</HashLink>
                      <a href="tel:561-486-9616" className="headerButton call_button_head burger_button"><i className="fas fa-phone-alt"></i> 561-486-9616</a>
                    </div >
                </Drawer>
              </div>
      
    } else {
      return < div className="links" >
        <HashLink to={"/#vision"} className="headerButton">Our Vision</HashLink>
        <HashLink to={"/#mission"} className="headerButton" scroll={el => scrollWithOffset(el)}>Mission Statement</HashLink>
        <HashLink to={"/#team"} className="headerButton" scroll={el => scrollWithOffset(el)}>Meet Us</HashLink>
        <a href="tel:561-486-9616" className="headerButton call_button_head"><i className="fas fa-phone-alt"></i> 561-486-9616</a>
      </div >
    }
  }

  return(
    <div className="header">
      
      <Link to="/"><img src="/images/ppav1.svg" alt="logo" className="logoHead"/></Link>
      {sizeCheck()}
     </div>
  )
}