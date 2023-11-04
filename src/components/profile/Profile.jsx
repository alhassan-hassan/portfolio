import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './Profile.scss';
import Avatar from '../../images/phe_one.png';

const Profile = (props) => {
  const iconStyle = {
    color: 'white',
  };

  const stacks = [
    ['A Full-Stack Developer', '4 Years'],
    ['A UI/UX Developer', '4 Years'],
    ['A Database Administrator', '3 Years'],
    ['A Cloud Architect', '1.5 Years'],
    ['Scientific Researcher', '2 Years']
  ];

  const [currentStack, setCurrentStack] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [typewriterText, setTypewriterText] = useState('');
  const [isErasing, setIsErasing] = useState(false);

  const handleDownloadCV = () => {
    // Create a link to the CV file
    const downloadLink = document.createElement('a');
    downloadLink.href = process.env.PUBLIC_URL + 'cv/Hassan_Alhassan_resume.pdf'; // Update the path as needed
    downloadLink.download = 'Hassan_Alhassan_resume.pdf';

    // Trigger a click event on the link to initiate the download
    downloadLink.click();
  };

  useEffect(() => {
    const typingSpeed = 100; // Typing speed (in milliseconds)
    const eraseSpeed = 20; // Erasing speed (in milliseconds)
    const delayAfterTyping = 1000; // Delay after typing (in milliseconds)

    const interval = setInterval(() => {
      if (isTyping) {
        if (typewriterText.length < stacks[currentStack][0].length) {
          setTypewriterText((prevText) => prevText + stacks[currentStack][0][typewriterText.length]);
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsErasing(true);
          }, delayAfterTyping);
        }
      } else if (isErasing) {
        if (typewriterText.length > 0) {
          setTypewriterText((prevText) => prevText.slice(0, -1));
        } else {
          setCurrentStack((currentStack + 1) % stacks.length);
          setIsErasing(false);
          setIsTyping(true);
        }
      }
    }, isTyping ? typingSpeed : eraseSpeed);

    return () => clearInterval(interval);
  }, [currentStack, typewriterText, isTyping, isErasing]);

  return (
    <div className='profile' style={props.mode ? {backgroundImage: `url(${require('../../images/service_bg.webp')})`} : {background: props.linear}}>
      <div className='content' style={{color: props.text_col}}>
        <p>Hello!</p>
        <p id='hassan'>I am Hassan!</p>
        <p id='blab'>I cannot be the only one fascinated by the transformative potential that technology holds. I'm a tech enthusiast on a mission to unravel the limitless possibilities that technology offers. I believe in the profound impact of innovation and how it transforms our world. As a developer, I'm not just writing lines of code; I'm crafting solutions that bridge the present with the future. Every project is a chance to build something extraordinary, to redefine the status quo, and to make a tangible difference. Join me on this journey as I navigate the ever-evolving tech landscape, one line of code at a time.</p>
        <div id='code-part' style={{ zIndex: 9999 }}>
          <code>
            <pre style={{ whiteSpace: 'pre' }}>
              {`
\tI’m: ${typewriterText}
\texperience: ${stacks[currentStack][1]}
`}
            </pre>
          </code>
        </div>
      </div>
      <div className='socials'>
        <div className='avatar-container'>
          <img src={Avatar} alt="wan" />
        </div>
        <div id='socials' className='flex-icons'>
          <div id='real-icons'>
            <a href="https://github.com/alhassan-hassan" target='_blank' title='Github'>
              <FontAwesomeIcon icon={faGithub} style={{color: props.text_col}} className='icon'/>
            </a>
            <a href="https://www.linkedin.com/in/hassan-alhassan-7b2a02194" target='_blank' title='LinkedIn'>
              <FontAwesomeIcon icon={faLinkedin} style={{color: props.text_col}} className='icon'/>
            </a>
            <a href="https://www.youtube.com/@alhassanhassan2308" target='_blank'>
              <FontAwesomeIcon icon={faYoutube} style={{color: props.text_col}} className='icon' title='YouTube'/>
            </a>
            <a href="https://www.instagram.com/dephnomnal/?hl=en" target='_blank'>
              <FontAwesomeIcon icon={faInstagram} style={{color: props.text_col}} className='icon' title='Instagram'/>
            </a>
            <a href="https://web.facebook.com/profile.php?id=100009050826862" target='_blank' title='Facebook'>
              <FontAwesomeIcon icon={faFacebook} style={{color: props.text_col}} className='icon'/>
            </a>
          </div>
            <div className='get-cv' style={{border: `1px solid ${props.color}`}}  onClick={handleDownloadCV}>
            Download CV
            <FontAwesomeIcon icon={faDownload} style={{color: props.text_col}} className='icon'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
