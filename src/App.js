import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useState } from 'react';
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
  const [theme, setTheme] = useState('intro');
  document.body.className = theme + '-body';

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<h2 id='loading'>Changing card...</h2>}>
          <NavComponent
            colors={theme + '-nav'}
            handlerColor={setTheme}
          ></NavComponent>
          <Routes>
            <Route index element={<Intro />} />
            <Route path='/about' element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer colors={theme + '-footer'} />
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
