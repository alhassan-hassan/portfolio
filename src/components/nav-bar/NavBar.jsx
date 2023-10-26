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
            <a className='navs-links' onClick={() => props.navToggle("home")} style={props.home ? { borderBottom: "4px solid #EE8961" } : {}}>Home</a>
            <a className='navs-links' onClick={() => props.navToggle("services")} style={props.services ? { borderBottom: "4px solid #EE8961" } : {}}>Services</a>
            <a className='navs-links' onClick={() => props.navToggle("projects")} style={props.projects ? { borderBottom: "4px solid #EE8961" } : {}}>Projects</a>
        </div>

        <div id='mode'>
            <div onClick={props.onLight}>Light</div>
            <FontAwesomeIcon
                icon={props.mode ? faToggleOn : faToggleOff}
                size="lg"
                className={`icon ${props.mode ? 'dark' : 'light'}`}
            />

            <div onClick={props.onDark} >Dark</div>
        </div>

        <button id='contact' style={{color: props.bcol, border:`0.1rem solid ${props.border}`}}>Contact Me</button>
    </div>
  )
}

export default NavBar