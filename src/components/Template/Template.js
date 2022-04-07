import React from "react";
import Navbar from "./Navbar";
import LeftSidebar from './LeftSidebar';
import Router from "../router/Router";

function Template() {
  return (
      <div>
          <Navbar/>
          <div className="PageAlignment">
            <div><LeftSidebar/></div>
            <div className="app-main__inner"> <Router/></div>
           
          </div>
          
      </div>
  );
}

export default Template;
