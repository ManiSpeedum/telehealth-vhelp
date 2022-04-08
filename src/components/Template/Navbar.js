import React, { useState } from "react";
import "../../assets/css/basemin.css";
import NavbarLeftHamburger from "./Navbar/NavbarLeftHamburger";
import NavbarMegaMenu from "./Navbar/NavbarMegaMenu";
import NavbarProjects from "./Navbar/NavbarProjects";
import NavbarSettings from "./Navbar/NavbarSettings";
import NavbarUserProfile from "./Navbar/NavbarUserprofile";
import NavbarRightHamburger from './Navbar/NavbarRightHamburger';
import NavbarGridViewIcon from "./Navbar/NavbarGridViewIcon";
import NavbarBellIcon from "./Navbar/NavbarBellIcon";
import NavbarCountryIcon from "./Navbar/NavbarCountryIcon";

const Navbar = () => {

  const[showContentMenu,setShowContentMenu]=useState(false);
  const[ShowContentSettings,setShowContentSettings]=useState(false);
  const[showContentProjects,setShowContentProjects]=useState(false);
  const[showContentUserProfile,setShowContentUserProfile]=useState(false);
  const[showContentLeftHamburger,setShowContentLeftHamburger]=useState(false);
  const[showContentRightHamburger,setShowContentRightHamburger]=useState(false);
  const[showContentGridViewIcon,setShowContentGridViewIcon]=useState(false);
  const[showContentBellIcon,setShowContentBellIcon]=useState(false);
  const[showContentCountryIcon,setShowContentCountryIcon]=useState(false);


  const onClickdownArrowMenu = () =>{
    setShowContentMenu(prev=>!prev)
  }
  const onClickdownArrowSettings = () =>{
    setShowContentSettings(prev => !prev);
  }
  const onClickdownArrowProjects = () =>{
    setShowContentProjects(prev => !prev);
  }
  const onClickdownArrowUserProfile = () =>{
    setShowContentUserProfile(prev => !prev);
  }
  const onClickLeftHamburger = () =>{
    setShowContentLeftHamburger(prev=>!prev)
  }
 const onClickRightHamburger = () =>{
  setShowContentRightHamburger(prev => !prev)
 }
 const onClickContentGridViewIcon = () =>{
  setShowContentGridViewIcon(prev=>!prev)
 }
 const onClickContentBellIcon = () =>{
  setShowContentBellIcon(prev=>!prev)
 }
 const onClickContentCountryIcon = () =>{
  setShowContentCountryIcon(prev=>!prev)
 }

  return (
    <nav className="navbar navbar-inverse">
      <div className="app-header header-shadow " >
       
      <div className="app-header__logo">
        <div className="logo-src">
          <img
            src="https://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19705.png"
            alt=""
            style={{ width: "40px" }}
          ></img>
        </div>
        <div className="header__pane ml-auto">
          <div>
            <button
              type="button"
              class="hamburger close-sidebar-btn hamburger--elastic"
              data-class="closed-sidebar"
              onClick={onClickLeftHamburger}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="app-header__content">
        <div className="app-header-left">
          <div className="search-wrapper">
            <div className="input-holder">
              <div className="search-icon">
                
                <i className="fa fa-search" style={{ color: "blue" }}></i>
              </div>
            </div>
          </div>

          <div className="header-megamenu nav">
            <div className="nav-item">
              <span className="gift-icon">
                <i className="fa fa-gift" style={{ color: "blue" }}></i>
              </span>
              <span>Mega Menu</span>
              <button className="down-angle" onClick={onClickdownArrowMenu}>
                <i className="fa fa-angle-down"></i>
              </button>
            </div>
           
            <div className="nav-item">
              <span className="gift-icon">
                <span class="badge badge-pill badge-danger ml-0 mr-2">4</span>
              </span>
              <span>Settings</span>
              <button className="down-angle" onClick={onClickdownArrowSettings}>
                <i className="fa fa-angle-down"></i>
              </button>
            </div>
           
            <div className="nav-item">
              <span className="gift-icon">
                <i className="fa fa-cog"></i>
              </span>
              <span>Projects</span>
              <button className="down-angle" onClick={onClickdownArrowProjects}>
                <i className="fa fa-angle-down"></i>
              </button>
            </div>
          </div>
         
          <div className="app-header-right">
            <div className="header-dots">
              <button className="input-holder input-holder-table-icon btn" onClick={onClickContentGridViewIcon}>
                <div className="table-icon icon4">
                  <i class="fa fa-table" style={{ color: "blue" }}></i>
                </div>
              </button>
              <button className="input-holder input-holder-bell-icon btn" onClick={onClickContentBellIcon}>
                <div className="bell-icon icon4">
                  <i className="fa fa-bell" style={{ color: "red" }}></i>
                </div>
              </button>
              <div className="input-holder">
                <button className="country-icon icon4 btn" onClick={onClickContentCountryIcon}>
                  <img
                    src="https://react.architectui.com/architectui-react-pro/static/media/DE.22d50712.svg"
                    alt=""
                  ></img>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-btn-lg pr-0">
        <div className="widget-content p-0">
          <div className="widget-content-wrapper">
            <div className="widget-content-left">
              <div className="btn-group">
                <span>
                  <img
                    src="https://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19705.png " alt=""
                    style={{ width: "30px" }}
                  />
                </span>
                <button className="userpic-down-angle" onClick={onClickdownArrowUserProfile}>
                  <i className="fa fa-angle-down ml-2 opacity-8"></i>
                </button>
              </div>
             
              <div className="widget-content-left-name">
                <div className="widget-heading">Alina Mcloughlin</div>
                <div className="widget-subheading opacity-8">MANAGER</div>
              </div>
              <div className="widget-content-right mr-2">
                <button className="btn-pill btn-shadow btn-shine btn btn-focus">
                  Logout
                </button>
              </div>
              <div className="header__pane ml-auto">
                <button
                  type="button"
                  className="hamburger close-sidebar-btn hamburger--elastic burger"
                  data-class="closed-sidebar"
                  onClick={onClickRightHamburger}
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    {showContentMenu ? <NavbarMegaMenu/> : null} 
     {ShowContentSettings ? <NavbarSettings/> : null}
      {showContentProjects ? <NavbarProjects/> : null}
       {showContentUserProfile ? <NavbarUserProfile/> : null}
       {showContentLeftHamburger ? <NavbarLeftHamburger/> : null}
       {showContentRightHamburger ? <NavbarRightHamburger/> : null}
       {showContentGridViewIcon ? <NavbarGridViewIcon/> : null}
       {showContentBellIcon ? <NavbarBellIcon/> : null}
       {showContentCountryIcon ?<NavbarCountryIcon/> : null}
</nav>
    
    
   
    
  );
};

export default Navbar;
