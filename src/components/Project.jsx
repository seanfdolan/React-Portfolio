// import { title } from 'process';
import React from 'react';

const Projects = () => {
    const projects = [
        { title: 'Project 1', description: 'Description of Project 1', link: 'https://github.com/seanfdolan/Module-9-Challenge---Weather-Dashboard' },
        { title: 'Project 2', description: 'Description of Project 2', link: 'https://github.com/seanfdolan/Module-8-Challenge---TypeScript' },
        { title: 'Project 3', description: 'Description of Project 3', link: 'https://github.com/seanfdolan/Module-7-Challenge---Node.js' },
        { title: 'Project 4', description: 'Description of Project 4', link: 'https://github.com/seanfdolan/Project-One-Mortgage' },
        { title: 'Project 5', description: 'Description of Project 5', link: 'https://github.com/seanfdolan/Code-Refractor'},
        { title: 'Project 6', description: 'Description of Project 6', link: 'https://github.com/seanfdolan/Module-12-Challenge-React-Portfolio'},
        ];
    return (
        <div>
            <h2>My Projects</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

    // return (
        // <div className="projects-section">
        //     <h2>Projects</h2>
        //     <ul>
        //         {projects.map((project, index) => (
        //             <li key={index}>
        //                 <a href={project.link} target="_blank" rel="noreferrer">{project.title}</a>: {project.description}       
            
            // title: 'Project 1',
            // description: 'Description of Project 1',
            // tasks: [
            //     {
            //         title: 'Task 1',
            //         description: 'Description of Task 1',
            //         subtasks: [
            //             'Subtask 1: Description of Subtask 1',
            //             'Subtask 2: Description of Subtask 2'
            //         ]
            //     },
            //     {
            //         title: 'Task 2',
            //         description: 'Description of Task 2'
            //     },
            //     {
            //         title: 'Task 3',
            //         description: 'Description of

// const Project = () => {
//     return (
//         <div className="project-section">
//             <h2>Projects</h2>
//             <ul>
//                 <li>Project 1: Description of project 1 A dynamic Vehicle Builder in TypeScript
//                     <ul>
//                         <li>Task 1: Description of task 1
//                             <ul>
//                                 <li>Subtask 1: Description of subtask 1</li>
//                                 <li>Subtask 2: Description of subtask 2</li>
//                             </ul>
//                         </li>
//                         <li>Task 2: Description of task 2</li>
//                         <li>Task 3: Description of task 3</li>
//                     </ul>
//                 </li>
//                 <li>Project 2: Description of project 2 A README Generator using Node.js</li>
//                 <li>Project 3: Description of project 3 A Weather Dashboard using OpenWeather API</li>
             
//                 <li>Project 4: Description of project 4</li>
//                 <li>Project 5: Description of project 5</li>
//                 <li>Project 6: Description of project 6</li>
//             </ul>
//         </div>
//     );
// };

export default Projects;