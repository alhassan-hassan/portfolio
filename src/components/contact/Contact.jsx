import React, { useState } from 'react'
import './Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = (props) => {
    const[fields, setFields] = useState({
        fname: "",
        lname: "",
        email: "",
        inquiry: ""
    })

    const changeField = async (event) => {
        setFields({...fields, [event.target.id]: event.target.value})
        console.log(fields)
    }

    const handleUserInquiry = (event) => {
        event.preventDefault();

        const emptyField = Object.keys(fields).find((key) => !fields[key]);
        if (emptyField) {
            alert(`Enter ${emptyField}! It is a required field.`);
        } else {
            alert("Message received. Thank you!");
        }
    }

    return (
    <div className='contact_'>
        <div className='contactee'>
            Reach Out Today.
        </div>

        <div className='c-info'>
            <div className='filler'>
                <form onSubmit={handleUserInquiry}>
                    <center>Send Inquiry</center>
                    <div id='initials'>
                        <div className='fields'>
                            <label htmlFor="fname"> First Name*</label>
                            <input type="text" 
                                placeholder='first name' value={fields.fname}
                                id='fname' onChange={changeField}/>
                        </div>

                        <div className='fields'>
                            <label htmlFor="lname"> Last Name*</label>
                            <input type="text" 
                                placeholder='last name' value={fields.lname}
                                id='lname' onChange={changeField}/>
                        </div>
                    </div>

                    <div className='fields'>
                        <label htmlFor="email"> Email*</label>
                        <input type="email" value={fields.email}
                            placeholder='first name' id='email' onChange={changeField}/>
                    </div>

                    <div className='fields'>
                        <label htmlFor="inquiry" id='enq'> Enter Enquiry*</label>
                        <textarea id='inquiry' value={fields.inquiry}
                            onChange={changeField}></textarea>
                    </div>

                    <center><button>SEND</button></center>
                </form>
            </div>

            <center className='link-up'>
                <p id='directly'>Or Contact Me Directly</p>
                <p id='link-up'>alhassanhassan360@gmail.com</p>
                <p id='link-up'>{"(+233) 20 1514 922"}</p>
            </center>
        </div>
       
        <hr />

        <div className='footer'>
            <center className='link-up'>
                <p id='link-up'>alhassanhassan360@gmail.com</p>
                <p id='link-up'>{"(+233) 20 1514 922"}</p>
            </center>

            <div className='init'>HA</div>

            <div id='socials' className='flex-icons'>
                <a href="https://github.com/alhassan-hassan" target='_blank' title='Github'>
                    <FontAwesomeIcon icon={faGithub} style={{color: props.color}} className='icon'/>
                </a>
                <a href="https://www.linkedin.com/in/hassan-alhassan-7b2a02194" target='_blank' title='LinkedIn'>
                    <FontAwesomeIcon icon={faLinkedin} style={{color: props.color}} className='icon'/>
                </a>
                <a href="https://www.youtube.com/@alhassanhassan2308" target='_blank'>
                    <FontAwesomeIcon icon={faYoutube} style={{color: props.color}} className='icon' title='YouTube'/>
                </a>
                <a href="https://www.instagram.com/dephnomnal/?hl=en" target='_blank'>
                    <FontAwesomeIcon icon={faInstagram} style={{color: props.color}} className='icon' title='Instagram'/>
                </a>
                <a href="https://web.facebook.com/profile.php?id=100009050826862" target='_blank' title='Facebook'>
                    <FontAwesomeIcon icon={faFacebook} style={{color: props.color}} className='icon'/>
                </a>
            </div>
        </div>

        <hr />
        <center className='copyright'>
            <p style={{color: `rgba(${props.color}, 0.3)`}}>© 2023 Hassan Alhassan. All rights reserved. Founder of <span>CODETHECHANGE</span></p>
            <div>
                <a href = "#contact-top" className='terms'>Terms of Service</a>
                <a href = "#contact-top" className='terms'>Return Policy</a>
                <a href = "#contact-top" className='terms'>Privacy Policy</a>
            </div>
        </center>
    </div>
  );
};

export default Contact