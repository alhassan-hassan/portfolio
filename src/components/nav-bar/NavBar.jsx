import React from 'react'
import './NavBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';

const NavBar = (props) => {

  return (
    <div className='nav-bar' style={{background: props.backer}}>
        <div id='name'> Hassan Alhassan</div>

        <div id='navs'>
            <a href="#" className='navs-links' onClick={() => props.navToggle("home")} style={{ borderBottom: props.home ? "4px solid #ee8961b3" : "none", color: props.bcol }}>Home</a>
            <a href="#services-top" className='navs-links' onClick={() => props.navToggle("services")} style={{ borderBottom: props.services ? "4px solid #ee8961b3" : "none", color: props.bcol }}>Services</a>
            <a href="#projects-top" className='navs-links' onClick={() => props.navToggle("projects")} style={{ borderBottom: props.projects ? "4px solid #ee8961b3" : "none", color: props.bcol }}>Projects</a>
        </div>

        <div id='mode'  style={{ color: props.bcol }}>
            <div onClick={props.onLight}>Light</div>
            <FontAwesomeIcon
                icon={props.mode ? faToggleOn : faToggleOff}
                size="lg"
                className={`icon ${props.mode ? 'dark' : 'light'}`}
                id='iconify'
                onClick={props.toggleMode}
            />

            <div onClick={props.onDark} >Dark</div>
        </div>

        <a href="#contact-top" id='contact' style={{color: props.bcol, border:`0.1rem solid ${props.border}`}}>Contact Me</a>
    </div>
  )
}

export default NavBar