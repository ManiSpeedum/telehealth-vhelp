import React from "react";
import Navbar from "./Navbar";
import LeftSidebar from './LeftSidebar';
import RoutePath from "../router/Router";

function Template() {
  
  return (
      <div>
          <Navbar/>
          <div className="PageAlignment">
            <div><LeftSidebar/></div>
           
            <div className="app-main__inner"> <RoutePath/></div>
           
          </div>
          
      </div>
  );
}

export default Template;
