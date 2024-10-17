import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

  export default function Home() {
    return (
        <div>
          
            <Header />
            {/* <Navigation /> */}
            <h1>Welcome to My Portfolio</h1>
            <p>This is the homepage. A Colombia University Bootcamp trained software developer with a Growth Mindset</p>
            <p>My technical skills include HTML, CSS, JavaScript, jQuery, Node.js, Express.js, SQL, MongoDB, React, and responsive web design.</p>
            <p>My projects include a dynamic Vehicle Builder in TypeScript with a README Generator using Node.js and a Weather Dashboard using OpenWeather API.</p>
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

function Header() {
  return (
    <header>
      <h1>Sean Dolan</h1>
      <h2>Full Stack Web Developer</h2>
      <p>New York, NY</p>

    </header>
  );
}


// function Navigation() {
//     return (
//         <nav>
//             <a href="/">Home</a>
//                 <Link to="/">Home</Link>
//                     <Typography
//                         onClick={() => history.push('/')}
//                         sx={{ cursor: 'pointer' }}
//                      >'Home'</Typography>
//             <a href="/about">About Me</a>
//                 <Link to="/about">About Me</Link>
//                     {/* <Typography variant="h6" color="inherit" noWrap> */}
//                     <Typography 
//                         onClick={() => history.push('/about')}
//                         sx={{ cursor: 'pointer' }}
//                     >'About Me'</Typography>
//             <a href="/portfolio">Portfolio</a>
//                 <Link to="/portfolio">Portfolio</Link>
//                     {/* <Typography variant="h6" color="inherit" noWrap> */}
//                     <Typography 
//                         onClick={() => history.push('/portfolio')}
//                         sx={{ cursor: 'pointer' }}
//                     >'Portfolio'</Typography>
//             <a href="/projects">Projects</a>
//             <a href="/contact">Contact</a>
//                 <Link to="/contact">Contact</Link>
//                     {/* <Typography variant="h6" color="inherit" noWrap> */}
//                     <Typography 
//                         onClick={() => history.push('/contact')}
//                         sx={{ cursor: 'pointer' }}
//                     >'Contact'</Typography>
//             <a href="resume">Resume</a>
//                 <Link to="resume">Resume</Link>
//                     {/* <Typography variant="h6" color="inherit" noWrap> */}
//                     <Typography 
//                         onClick={() => history.push('/resume')}
//                         sx={{ cursor: 'pointer' }}
//                     >'Resume'</Typography>
//         </nav>
//     );
//   } 

function Footer() {
  return (
    <footer style={styles.footer}>
      <h5>Footer Thanks for checking out my page.</h5>
      <div>
        <a href="https://github.com/seanfdolan" style={styles.link}>GitHub</a>
        <span> | </span>
        <a href="https://www.linkedin.com/in/sean-dolan-564201211/" style={styles.link}>LinkedIn</a>
        <span> | </span>
        <a href="https://www.stackoverflow.com/users/25668217/seanfdolan" style={styles.link}>Stack Overflow</a>
        <span> | </span>
        <a href="mailto:seanfdolan@gmail.com" style={styles.link}>Email</a>
      </div>
  
    </footer>
  );
}


