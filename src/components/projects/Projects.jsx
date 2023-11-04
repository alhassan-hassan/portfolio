import React from 'react'
import './Projects.scss'
import Catt from '../../images/catt.jpeg'
import ProjectCard from './card/ProjectCard';
import {projects} from '../../data/Data'

const Projects = (props) => {
    return (
        <div className='projects' style={props.mode ? {backgroundImage: `url(${require('../../images/raw.jpeg')})`} : {background: props.linear}}>
            <p id='titler' tyle={{color: props.color}}>My Current Projects</p>
            <div className="proj-container">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        proj_name={project.title}
                        description={project.description}
                        color = {props.color}
                        backgound = {props.bg}
                        github = {project.github}
                        site = {project.site}
                />
            ))}
            </div>
        </div>
    )
    }

export default Projects
