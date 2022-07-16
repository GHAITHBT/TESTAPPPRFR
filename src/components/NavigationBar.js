import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './Sidebar';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { Button } from 'bootstrap';
import {useHistory} from "react-router-dom"
function Navbar() {
  const history = useHistory()
  const [screen, setScreen] = useState(window.innerWidth);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars style={{color:"white"}} onClick={showSidebar} />
          </Link>
          <ul>
          <Link to='/Acceuil' className='menu-bars'>

            <span style={{color:'white',fontSize:"38px",marginLeft:"60vh",fontFamily:"Brush Script MT",fontWeight:"bold"}}>T.E.A</span>
            <span style={{color:'white',fontSize:"20px",marginLeft:"8px",fontFamily:"Brush Script MT",fontWeight:"bold"}}>{localStorage.username}</span>
           </Link> 
          <AiIcons.AiOutlineLogout style={{marginLeft: '75vh',color:"white"}}onClick={()=>history.push('/')}/>
          <span style={{color:'White'}} onClick={()=>history.push('/')}>Log Out</span> </ul>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' >
              <FaIcons.FaBars style={{fontSize:"20px"}}/> 
              </Link>
              <li style={{color:'White'}}>TOUIHRI EQUIPEMENT AUTO</li>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;