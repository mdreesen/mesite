import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import Project from './pages/Project';
// import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';

// import components
// import Navbar from './components/Navbar';
const NavbarMenu = lazy(() => import('./components/NavbarMenu'))
// const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div />}>
          <NavbarMenu />
        </Suspense>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Project} />
        <Suspense fallback={<div />}>
          {/* <Footer /> */}
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
