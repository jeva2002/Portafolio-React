import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/NavComponent';
import Intro from './components/Intro';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <>
                <NavComponent></NavComponent>
                <Intro />
                <Footer></Footer>
              </>
            }
          />
          <Route
            path='/about'
            element={
              <>
                <NavComponent colors='about-nav'></NavComponent>
                <About />
                <Footer colors='about-footer' />
              </>
            }
          />
          <Route
            path='/portfolio'
            element={
              <>
                <NavComponent colors='portfolio-nav'></NavComponent>
                <Portfolio />
                <Footer colors='portfolio-footer' />
              </>
            }
          />
          <Route
            path='/contact'
            element={
              <>
                <NavComponent colors='contact-nav'></NavComponent>
                <Contact />
                <Footer colors='contact-footer' />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
