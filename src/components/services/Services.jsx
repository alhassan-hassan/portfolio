import React from 'react'
import './Services.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpider, faSquareCheck, faCloudSunRain, faDatabase } from '@fortawesome/free-solid-svg-icons';

const Services = (props) => {
  return (
    <div className='services' style={props.mode ? {backgroundImage: `url(${require('../../images/services2.avif')})`} : {background: props.linear}}>
        <p id='announce'>My Services</p>

        <div className='service-tank'>
            <div className='a-stack' id='full-stack'>
                <div className='main-stack'>
                    <FontAwesomeIcon icon={faSpider} size = "3x" className='stack-icon'/>
                    <p className='what'>FULL-STACK DEVELOPER</p>
                    <p className='describe'>I've navigated the digital realm, crafting intricate full-stack applications both as a lone explorer and a collaborative voyager. Along this expedition, I've honed a versatile arsenal of skills, poised to unravel complex enigmas with ingenious solutions.</p>
                    <div>
                        <div><FontAwesomeIcon icon={faSquareCheck}  className='checker'/>Front-End Developer</div>
                        <div><FontAwesomeIcon icon={faSquareCheck}  className='checker'/>Back-End Developer</div>
                        <div><FontAwesomeIcon icon={faSquareCheck}  className='checker'/>Database Adminsitrator</div>
                    </div>
                </div>
                <div class="vertical-line"></div> 
            </div>

            <div className='a-stack' id='cloud'>
                <div className='main-stack'>
                    <FontAwesomeIcon icon={faCloudSunRain} size = "3x" className='stack-icon'/>
                    <p className='what'>CLOUD ARCHITECT</p>
                    <p className='describe'>I'm dedicated to architecting scalable, secure, and resilient cloud solutions. With a passion for innovation and a knack for harnessing the power of cloud technology, I'm your go-to professional for building the bridge to a future in the clouds. Let's navigate this digital frontier together!</p>
                    <div>
                        <div><FontAwesomeIcon icon={faSquareCheck} className='checker'/>Amazon Web Services (AWS)</div>                                    
                    </div>
                </div>
                <div class="vertical-line"></div>
            </div>

            <div className='a-stack' id='data'>
                <div className='main-stack'>
                    <FontAwesomeIcon icon={faDatabase} size = "3x" className='stack-icon'/>
                    <p className='what'>DATA SCIENTIST</p>
                    <p className='describe'>As a data scientist, I'm passionate about turning raw data into actionable knowledge. With a curious mind and a strong analytical toolbox, I thrive on uncovering hidden patterns, solving complex puzzles, and transforming data into valuable narratives that drive decision-making.</p>
                    <div>
                        <div><FontAwesomeIcon icon={faSquareCheck} className='checker'/>Data Analyst</div>
                        <div><FontAwesomeIcon icon={faSquareCheck} className='checker'/>Data Management</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Services