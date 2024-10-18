
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


export default Navigation; // Added to export all components
