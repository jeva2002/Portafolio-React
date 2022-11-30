import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';

const NavComponent = lazy(() => import('./components/NavComponent'));
const Footer = lazy(() => import('./components/Footer'));
const Intro = lazy(() => import('./components/Intro'));
const About = lazy(() => import('./components/About'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Contact = lazy(() => import('./components/Contact'));

const colorsCommon = () => {
  return window.location.pathname.replace('/', '');
};

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<h2 id='loading'>Changing card...</h2>}>
          <NavComponent colors={colorsCommon() + '-nav'}></NavComponent>
          <Routes>
            <Route index element={<Intro />} />
            <Route path='/about' element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer colors={colorsCommon() + '-footer'} />
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
