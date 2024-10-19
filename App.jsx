import React from 'react';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
// import Portfolio from './pages/PortfolioPage';
// import Projects from './components/Projects';
import Contact from './pages/ContactPage';
import Resume from './pages/ResumePage';
import './App.css';

import {Outlet} from 'react-router-dom'
import Navigation from './components/Navigation'
import { useState, useEffect, useContext, Component } from 'react'

import Button from './react-bootstrap/Button'
import Footer from './components/Footber';
import Header from './components/Header';


function App()  {
  return (
    <div className="App">
      <Header />
      <Navigation />
      {/* <Home /> */}
      <main>
        <Outlet />
      </main>
      {/* <About /> */}
      {/* <Projects /> */}
      {/* <Portfolio /> */}
      {/* <Contact /> */}
      {/* <Resume /> */}
      <Footer />
    </div>
  )
}

export default App;

