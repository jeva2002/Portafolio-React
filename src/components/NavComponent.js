import Nav from 'react-bootstrap/Nav';
import '../styles/Nav.css';

function NavComponent({ colors = '' }) {
  return (
    <header>
      <Nav variant='tabs' defaultActiveKey='/home' id={colors}>
        <Nav.Item>
          <Nav.Link href='/' className='links'>
            Intro
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-1' className='links' href='/about'>
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-2' className='links' href='/portfolio'>
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-3' className='links' href='/contact'>
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
}

export default NavComponent;
