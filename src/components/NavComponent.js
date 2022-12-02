import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

function NavComponent({ colors, handlerColor }) {
  return (
    <header>
      <Nav variant='tabs' defaultActiveKey='/home' id={colors}>
        <Nav.Item>
          <NavLink
            className='links nav-link'
            to='/'
            onClick={() => handlerColor('intro')}
          >
            Intro
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            className='links nav-link'
            to='/about'
            onClick={() => handlerColor('about')}
          >
            About
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            className='links nav-link'
            to='/portfolio'
            onClick={() => handlerColor('portfolio')}
          >
            Portfolio
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            className='links nav-link'
            to='/contact'
            onClick={() => handlerColor('contact')}
          >
            Contact
          </NavLink>
        </Nav.Item>
      </Nav>
    </header>
  );
}

export default NavComponent;
