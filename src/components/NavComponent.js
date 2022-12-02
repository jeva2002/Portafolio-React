import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

function NavComponent({ colors = '', handlerColor }) {
  return (
    <header>
      <Nav variant='tabs' defaultActiveKey='/home' id={colors}>
        <Nav.Item>
          <NavLink
            className='links nav-link'
            to='/'
            onClick={() => handlerColor()}
          >
            Intro
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            eventKey='link-1'
            className='links nav-link'
            to='/about'
            onClick={() => handlerColor()}
          >
            About
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            eventKey='link-2'
            className='links nav-link'
            to='/portfolio'
            onClick={() => handlerColor()}
          >
            Portfolio
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            eventKey='link-3'
            className='links nav-link'
            to='/contact'
            onClick={() => handlerColor()}
          >
            Contact
          </NavLink>
        </Nav.Item>
      </Nav>
    </header>
  );
}

export default NavComponent;
