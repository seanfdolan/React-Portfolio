import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link
                    to="/"
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/About"
                    className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/Portfolio"
                    className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/Contact"
                    className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/Resume"
                    className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </Link>
            </li>
        </ul>
        );
}

export default NavTabs;



// //from lession 22
// import React from 'react';

// function NavTabs({ currentPage, handlePageChange }) {
//     return (
//         <>
//         <ul className="nav nav-tabs">
//             <li className="nav-item">
//                 <a
//                     href="#home"
//                     onClick={() => handlePageChange('Home')}
//                     className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
//                 >
//                     Home
//                 </a>
//             </li>
//             <li className="nav-item">
//                 <a
//                     href="#about"
//                     onClick={() => handlePageChange('About Me')}
//                     className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'} 
//                     >
//                     About Me
//             </a>
//             </li>
//             <li className="nav-item">
//                 <a
//                     href="#portfolio"
//                     onClick={() => handlePageChange('Portfolio')}
//                     className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
//                 >
//                     Portfolio
//                 </a>
//             </li>
//             <li className="nav-item">
//                 <a
//                     href="#contact"
//                     onClick={() => handlePageChange('Contact')}
//                     className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//                 >
//                     Contact
//                 </a>
//             </li>
//             <li className="nav-item">
//                 <a
//                     href="#resume"
//                     onClick={() => handlePageChange('Resume')}
//                     className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
//                     >
//                         Resume
//                     </a>
//             </li>

// </ul>
//         </>
//     );
// }

// const tabs = ['Home', 'About Me', 'Portfolio', 'Contact', 'Resume'];


// export default NavTabs;
