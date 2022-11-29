import { BsLinkedin, BsGithub } from 'react-icons/bs';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <main id='contact'>
      <h1>CONTACT</h1>
      <figure>
        <BsLinkedin
          style={{ width: '7rem', height: '7rem', cursor: 'pointer' }}
          onClick={() => {
            window.location.href =
              'https://www.linkedin.com/in/juan-arias-12a85a258/';
          }}
        />
        <BsGithub
          style={{ width: '7rem', height: '7rem', cursor: 'pointer' }}
          onClick={() => {
            window.location.href = 'https://github.com/jeva2002';
          }}
        />
      </figure>
    </main>
  );
};

export default Contact;
