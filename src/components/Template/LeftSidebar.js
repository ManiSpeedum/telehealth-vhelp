import React from 'react';
import { Link } from "react-router-dom";

const LeftSidebar = () => {

    const navlinks=[
        {path:'/', name: 'Home',id:1,iconLogo:<i class="fa fa-check-square-o"></i>,downAngleIcon: <i className="fa fa-angle-down ml-2 opacity-8"></i>},
        {path:'/Form', name: 'Form',id:2,iconLogo:<i class="fa fa-check-square-o"></i>,downAngleIcon: <i className="fa fa-angle-down ml-2 opacity-8"></i>},
        { path: '/table', name: 'Dashboard',id:3,iconLogo:<i class="fa fa-check-square-o"></i>,downAngleIcon: <i className="fa fa-angle-down ml-2 opacity-8"></i>}
    ]

    const navlinksmap=navlinks.map((value,index)=>(
        <Link to={value.path} key={index} className="LeftSidebarSubLinks">
            <div>
                <span>{value.iconLogo}</span>
                <span>{value.name}</span>
                <span className='LeftSidebarSubheading-down-arrow-icon'>{value.downAngleIcon}</span> 
            </div>
            
        </Link>
    ))

    return ( 
        <div className="app-sidebar sidebar-shadow">
            <div className="scrollbar-sidebar">
            <div className="app-sidebar__inner">
            <ul className="vertical-nav-menu">
                <li className="app-sidebar__heading">Menu</li>
                <div>{navlinksmap}</div>

            </ul>
            </div>
        </div>
        <div className="ps__rail-y">
            <div className="ps__thumb-y"></div>
        </div>
        </div>
        
     );
}
 
export default LeftSidebar;