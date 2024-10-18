import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

  export default function Home() {
    return (
        <div>
          
            <Header />
          
            <h2>Welcome to My Portfolio</h2>
            <p>This is the homepage. A Colombia University Bootcamp trained software developer with a Growth Mindset</p>
            <p>My technical skills include HTML, CSS, JavaScript, jQuery, Node.js, Express.js, SQL, MongoDB, React, and responsive web design.</p>
            <p>My projects include a dynamic Vehicle Builder in TypeScript with a README Generator using Node.js and a Weather Dashboard using OpenWeather API.</p>
            <Navigation  />
            <Footer />
            
        </div>
    );
};

const styles = {
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  footer: {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 0',
    textAlign: 'center',
  },
};



function Navigation() {
    return (
        <nav>
         
                <Link to="/">Home</Link>
                    <Typography
                        onClick={() => history.push('/')}
                        sx={{ cursor: 'pointer' }}
                     ></Typography>
          
                <Link to="/about">About Me</Link>
                    {/* <Typography variant="h6" color="inherit" noWrap> */}
                    <Typography 
                        onClick={() => history.push('/about')}
                        sx={{ cursor: 'pointer' }}
                    ></Typography>
          
                <Link to="/portfolio">Portfolio</Link>
                    {/* <Typography variant="h6" color="inherit" noWrap> */}
                    <Typography 
                        onClick={() => history.push('/portfolio')}
                        sx={{ cursor: 'pointer' }}
                    ></Typography>
          
                <Link to="/contact">Contact</Link>
                    {/* <Typography variant="h6" color="inherit" noWrap> */}
                    <Typography 
                        onClick={() => history.push('/contact')}
                        sx={{ cursor: 'pointer' }}
                    ></Typography>
          
                <Link to="resume">Resume</Link>
                    {/* <Typography variant="h6" color="inherit" noWrap> */}
                    <Typography 
                        onClick={() => history.push('/resume')}
                        sx={{ cursor: 'pointer' }}
                    ></Typography>
        </nav>
    );
  } 




