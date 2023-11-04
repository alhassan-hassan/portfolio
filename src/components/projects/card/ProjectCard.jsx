import React, { useState } from 'react';
import './ProjectCard.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


const ProjectCard = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleHover = (e) => {
      e.preventDefault();
      setIsFlipped(!isFlipped);
    };

    const handleFront = (e) => {
        setIsFlipped(false);
      };
  
    return (
      <div className= "project-card " onMouseLeave={handleFront}>
        <div className="card">
            {!isFlipped ? (
                <div className='front' 
                    style={{background: props.backgound, 
                    border: `1px solid #706a6a`,
                    borderLeft: `10px solid #706a6a`}}>
                    <div className='describers'>
                        <p style={{color: props.color}} id='name_proj'>{props.proj_name}</p>
                        <p id='viewer' onClick={handleHover}>View Project Detail</p>
                    </div>
                    <div className='icons-site'>
                        {props.github ? (
                            <a href={props.github} target='_blank' title='github' rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} style={{color: props.color}} className='icon_'size='2x'/>
                            </a>
                        ): ""}

                        {props.site ? (
                            <a href={props.site} target='_blank' title='visit site' rel="noreferrer">
                                <FontAwesomeIcon icon={faPaperPlane} style={{color: props.color}} className='icon_' size='2x'/>                            </a>
                        ): ""}
                    </div>
                </div>
            ): 
                <div className="back" 
                    style={{background: props.backgound, 
                    border: `1px solid #706a6a`,
                    borderLeft: `10px solid #706a6a`}}
                    onClick={handleHover}
                    >
                    <p>{props.description}</p>
                </div>
            } 
        </div>
        
    </div>
  );
};

export default ProjectCard;