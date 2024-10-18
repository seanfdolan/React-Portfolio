
import React from 'react';
// import Project from './Project';
// import myPhoto from '../assets/my-photo.jpg';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><a href="/">About Me</a></li>
                    {/* <li><Link to="/">Home</Link></li> */}
                    {/* <div>
                        <img src={myPhoto} alt="My photo" style={{ width: '300px', height: 'auto' }} />
                    </div> */}
                <li><a href="/portfolio">Portfolio</a></li>
                    {/* <li><Link to="/portfolio">Portfolio</Link></li> */}
                <li><a href="/contact">Contact</a></li>
                    {/* <li><Link to="/contact">Contact</Link></li> */}
                <li><a href="/resume">Resume</a></li>
                    {/* <li><Link to="/resume">Resume</Link></li> */}
            </ul>
        </nav>
    );
};


// const AboutMe = () => {
//     return (
//         <section id="about">
//             <h2>About Me</h2>
//             <p>This is the About Me section where you can add information about yourself.</p>
//             <p>I am a full stack web developer with a background in education and a passion for learning new things.</p>
//          <p>My technical skills include HTML, CSS, JavaScript, jQuery, Node.js, Express.js, SQL, MongoDB, React, and responsive web design.</p>
//             <img src={myPhoto} alt="My photo" style={{ width: '300px', height: 'auto' }} />
//         </section>
//     );
// };

// const Portfolio = () => {
//     return (
//         <section id="portfolio">
//             <h2>Portfolio</h2>
//             <p>This is the Portfolio section where you can showcase your work.</p>
//             <Project title="Project 1" description="Description of Project 1" />
//             <Project title="Project 2" description="Description of Project 2" />
//             <Project title="Project 3" description="Description of Project 3" />
//             <Project title="Project 4" description="Description of Project 4" />
//             <Project title="Project 5" description="Description of Project 5" />
//             <Project title="Project 6" description="Description of Project 6" />
//         </section>
//     );
// };

// const Project = ({ title, description }) => {
//     return (
//         <div className="project">
//             <h3>{title}</h3>
//             <p>{description}</p>
//         </div>
//     );
// };

// const Contact = () => {
//     return (
//         <section id="contact">
//             <h2>Contact</h2>
//             <p>This is the Contact section where you can add contact information.
//                 You can add a form here for visitors to fill out to contact you.
//                 <form>
//                     <div>
//                         <label htmlFor="name">Name:</label>
//                         <input type="text" id="name" name="name" required />
//                     </div>
//                     <div>
//                         <label htmlFor="email">Email:</label>
//                         <input type="email" id="email" name="email" required />
//                     </div>
//                     <div>
//                         <label htmlFor="message">Message:</label>
//                         <textarea id="message" name="message" required></textarea>
//                     </div>
//                     <button type="submit">Submit</button>
//                 </form>
//             </p>
//         </section>
//     );
// };

// const Resume = () => {
//     return (
//         <>
//             <section id="resume">
//                 <h2>Resume</h2>
//                 <p>This is the Resume section where you can add your resume.</p>
//                 <a href="resume.pdf" download="SeanDolanPortfolio.pdf">Download Resume</a>
//                 <button onClick={downloadResume}>Download Resume</button>
//                     {/* window.location.href = 'resume.pdf'; */}
//                 <a href="https://www.linkedin.com/in/sean-dolan-564201211">LinkedIn</a>
//             </section>
//         </>
//     );
// };


export default Navigation; // Added to export all components
