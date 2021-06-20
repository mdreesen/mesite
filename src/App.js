import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact';

const NavbarMenu = lazy(() => import('./components/NavbarMenu'))

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div />}>
          <NavbarMenu />
        </Suspense>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/contact" component={Contact} />
        <Suspense fallback={<div />}>
          {/* <Footer /> */}
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
