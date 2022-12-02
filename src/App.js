import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ErrorBoundary from './components/error/ErrorBoundary';
import NotFound from './components/error/NotFound';

const NavComponent = lazy(() => import('./components/NavComponent'));
const Footer = lazy(() => import('./components/Footer'));
const Intro = lazy(() => import('./components/views/Intro'));
const About = lazy(() => import('./components/views/About'));
const Portfolio = lazy(() => import('./components/views/Portfolio'));
const Contact = lazy(() => import('./components/views/Contact'));

function App() {
  const [commonColor, setCommonColor] = useState();
  const colorsCommon = () => {
    if (
      (window.location.pathname === '/about') |
      (window.location.pathname === '/portfolio') |
      (window.location.pathname === '/contact')
    ) {
      setCommonColor(window.location.pathname.replace('/', ''));
    } else {
      setCommonColor('');
    }
  };

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<h2 id='loading'>Changing card...</h2>}>
          <NavComponent
            colors={commonColor + '-nav'}
            handlerColor={colorsCommon}
          ></NavComponent>
          <Routes>
            <Route index element={<Intro />} />
            <Route path='/about' element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer colors={commonColor + '-footer'} />
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
