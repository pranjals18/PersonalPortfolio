import React from 'react'
import './projects.css'

import ProjectDetails from './ProjectDetails'

const Projects = () => {

    return (
        <section className="projects section" id='projects'>
            <h2 className="section__title">Projects</h2>

            <ProjectDetails />

        </section>
    )
}
export default Projects