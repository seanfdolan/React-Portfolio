import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Link, } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
// import Portfolio from './pages/PortfolioPage';
import Projects from './components/Project';
import Contact from './pages/ContactPage';
import Resume from './pages/ResumePage';
import './App.css'; // Create this file for global styles

import {Outlet} from 'react-router-dom'
import Navigation from './components/Navigation'
import { useState, useEffect, useContext, Component } from 'react'

import Button from 'react-bootstrap/Button'


function App()  {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <main>
        <Outlet />
      </main>
      
      <About />
      <Projects />
      {/* <Portfolio /> */}
      <Contact />
      <Resume />
    </div>
  )
}

export default App;

