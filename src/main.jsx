// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation';
import About from './pages/AboutPage';
import Portfolio from './pages/PortfolioPage';
import Contact from './pages/ContactPage';
import Resume from './pages/ResumePage';
import path from 'path';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/portfolio/:id',
        element: <Portfolio />,
      },
      // {
      //   path: '/ContactPage',
      //   element: <ContactPage />,
      // },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);


// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );

// const navButtons = [
//   AboutMe, Portfolio, Contact, Resume
// ];

// const handlePageChange = (page) => {
//   setPage(page);
// };
