import React, { Suspense } from 'react';

import ProjectCards from '../../components/ProjectCards';

const Project = () => {
    return (
        <Suspense fallback={<div/>}>
        <div className="projects-page">
            <section className="header">
                <h1>Projects</h1>
            </section>
            <ProjectCards />
        </div>
        </Suspense>
    );
};

export default Project;