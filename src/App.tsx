import React from 'react';
import { Routes, Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import router, { RouteConfiguration } from './router';
import './App.css';

function App() {
  return (
    <Router>
      <Routes> 
        {
          router.map((route: RouteConfiguration, index: number) => (
            <Route key={index} path={route.link} element={route.page} />
          ))
        } 
      </Routes>
    </Router>
  );
}

export default App;
