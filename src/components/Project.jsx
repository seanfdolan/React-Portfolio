// import { title } from 'process';
import React from 'react';

const Projects = () => {
    const projects = [
        { title: 'Project Management Tool', description: 'A tool to manage projects, tasks, and subtasks.', link: 'https://github.com/seanfdolan/Project-Management-Tool', "screenshot":"/images/pic.jpeg" },
        { title: 'Weather Dashboard', description: 'Weather dashboard application that calls the OpenWeather API and renders data in a browser.', link: 'https://github.com/seanfdolan/Module-9-Challenge---Weather-Dashboard' },
        { title: 'Vehicle Builder', description: 'Update to an existing TypeScript command-line application that builds and uses cars to include additional options for motorbikes and trucks.', link: 'https://github.com/seanfdolan/Module-8-Challenge---TypeScript' },
        { title: 'Professional README Generator', description: 'Command-line application that dynamically generates a professional README.md file from a users input using the Inquirer package.', link: 'https://github.com/seanfdolan/Module-7-Challenge---Node.js' },
        { title: 'Mortgage Repayment Calculator', description: 'Independent mortgage calculation solution.', link: 'https://github.com/seanfdolan/Project-One-Mortgage' },
        { title: 'Personal Blog', description: 'Modified starter code for dynamically rendering blog posts', link: 'https://github.com/seanfdolan/Personal-Blog'},
        { title: 'Project 6', description: 'Description of Project 6', link: 'https://github.com/seanfdolan/Module-12-Challenge-React-Portfolio'},
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