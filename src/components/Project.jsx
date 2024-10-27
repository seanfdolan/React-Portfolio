// import { title } from 'process';
import React from 'react';

const Projects = () => {
    const projects = [
        { title: 'React Portfolio', description: 'Deployed application on Netlify showcasing the latest technologies.', link: 'https://github.com/seanfdolan/React-Portfolio', screenshot: '/images/pic.jpeg', style: { width: '100px', height: '100px' } },
        { title: 'Weather Dashboard', description: 'Weather dashboard application that calls the OpenWeather API and renders data in a browser.', link: 'https://github.com/seanfdolan/Module-9-Challenge---Weather-Dashboard', screenshot: '/images/weather-dashboard.png' },
        { title: 'Vehicle Builder', description: 'Update to an existing TypeScript command-line application that builds and uses cars to include additional options for motorbikes and trucks.', link: 'https://github.com/seanfdolan/Vehicle-Builder', screenshot: '/images/vehicle-builder.png' },
        { title: 'Professional README Generator', description: 'Command-line application that dynamically generates a professional README.md file from a users input using the Inquirer package.', link: 'https://github.com/seanfdolan/Professional-README-Generator', screenshot: '/images/readme-generator.png' },
        { title: 'Mortgage Repayment Calculator', description: 'Independent mortgage calculation solution.', link: 'https://github.com/seanfdolan/Project-One-Mortgage', screenshot: '/images/mortgage-calculator.png' },
        { title: 'Personal Blog', description: 'Modified starter code for dynamically rendering blog posts', link: 'https://github.com/seanfdolan/Personal-Blog', screenshot: '/images/personal-blog.png' },
        { title: 'Project 6', description: 'Description of Project 6', link: 'https://github.com/seanfdolan/Module-12-Challenge-React-Portfolio', screenshot: '/images/project-6.png' },
    ];
    return (
        <div>
            <h2>My Projects</h2>
            <ul className="card-container">
                {projects.map((project, index) => (
                    <li className="cards" key={index}>
                        <h3>{project.title}</h3>
                        <img src={project.screenshot} alt={project.title} />
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;