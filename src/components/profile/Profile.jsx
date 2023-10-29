import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Profile.scss';
// import Avatar from '../../images/avatar.png'
import Avatar from '../../images/phe_one.png'

const Profile = (props) => {

    const iconStyle = {
        color: 'white',
      };

    const stacks = [
        ['Single', 'Lost Count Years'],
        ['A Full-Stack Developer', '4 Years'],
        ['A UI/UX Developer', '4 Years'],
        ['A Database Administrator', '3 Years'],
        ['A Cloud Architect', '1.5 Years'],
        [ 'Scientific Researcher', '2 Years'],
        ['Philosopher', 'A Decade']
    ];

    const [currentStack, setCurrentStack] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentStack((currentStack + 1) % stacks.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [currentStack]);

  return (
    <div className='profile' style={props.mode ? {backgroundImage: `url(${require('../../images/service_bg.webp')})`} : {background: props.linear}}>
      <div className='content' style={{color:props.text_col}}>
        <p>Hello!</p>
        <p id='hassan'>I am Hassan!</p>
        <p id='blab'>I cannot be the only one fascinated by the transformative 
            potential that technology holds. I'm a tech enthusiast on a mission to unravel the limitless possibilities that technology offers. I believe in the profound impact of innovation and how it transforms our world. As a developer, I'm not just writing lines of code; I'm crafting solutions that bridge the present with the future. Every project is a chance to build something extraordinary, to redefine the status quo, and to make a tangible difference. Join me on this journey as I navigate the ever-evolving tech landscape, one line of code at a time.</p>
        <div id='code-part'>
          <code >
            <pre style={{ whiteSpace: 'pre' }}>
                {`{
\tI’m: ${stacks[currentStack][0]},
\texperience: ${stacks[currentStack][1]}
}`}
</pre>
          </code>
        </div>
      </div>
      <div className='socials'>
    <div className='avatar-container'>
        <img src={Avatar} alt="wan" />
    </div>
    <div id='socials' className='flex-icons'>
        <a href="https://github.com/alhassan-hassan" target='_blank' title='Github'>
            <FontAwesomeIcon icon={faGithub} style={props.iconStyle} className='icon'/>
        </a>
        <a href="https://www.linkedin.com/in/hassan-alhassan-7b2a02194" target='_blank' title='LinkedIn'>
            <FontAwesomeIcon icon={faLinkedin} style={props.iconStyle} className='icon'/>
        </a>
        <a href="https://www.youtube.com/@alhassanhassan2308" target='_blank'>
            <FontAwesomeIcon icon={faYoutube} style={props.iconStyle} className='icon' title='YouTube'/>
        </a>
        <a href="https://www.instagram.com/dephnomnal/?hl=en" target='_blank'>
            <FontAwesomeIcon icon={faInstagram} style={props.iconStyle} className='icon' title='Instagram'/>
        </a>
        <a href="https://web.facebook.com/profile.php?id=100009050826862" target='_blank' title='Facebook'>
            <FontAwesomeIcon icon={faFacebook} style={props.iconStyle} className='icon'/>
        </a>
    </div>
    </div>
    </div>
  );
}

export default Profile;
