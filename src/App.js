import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import pages
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';

// import components
// import Navbar from './components/Navbar';
const Navbar = lazy(() => import('./components/Navbar'))
// const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div />}>
          <Navbar />
        </Suspense>
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} /> */}
        <Suspense fallback={<div />}>
          {/* <Footer /> */}
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
