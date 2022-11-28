import Nav from 'react-bootstrap/Nav';
import '../styles/Nav.css';

function NavComponent() {
  return (
    <header>
      <Nav variant='tabs' defaultActiveKey='/home'>
        <Nav.Item>
          <Nav.Link href='/home' className='links'>
            Intro
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-1' className='links'>
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-2' className='links'>
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-3' className='links'>
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
}

export default NavComponent;
