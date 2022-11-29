import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { SiMongodb, SiNodedotjs, SiReact, SiBootstrap } from 'react-icons/si';
import { FaGitAlt, FaGithub } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import '../styles/About.css';

const iconsStyle = {
  height: '5rem',
  width: '5rem',
};

const About = () => {
  return (
    <main id='about'>
      <section>
        <h1>SKILLS</h1>
        <p>
          I have practiced and reviewed some technologies, I know how to apply
          them to different situations and I know what their purposes are. I
          have good bases in JS (with sintax of legacy and of ES), HTML and CSS.
          I have used node in the server site with express to do a REST API and
          to install many libraries with npm. I'm studying React with some
          libraries to amplify its range, and I'm using Bootstrap in some
          components to speed up the design. Also, I'm familiar with version
          control system in Git and GitHub, and with some DB as MongoDB.
        </p>
        <Button variant='warning' id='cv'>
          Curriculum Vitae
        </Button>
      </section>
      <figure id='tech-container'>
        <AiFillHtml5 alt='HTML logo' style={iconsStyle} id='HTML' />
        <IoLogoJavascript alt='JavaScript logo' style={iconsStyle} id='JS' />
        <IoLogoCss3 alt='CSS logo' style={iconsStyle} id='CSS' />
        <SiMongodb alt='MongoDB logo' style={iconsStyle} id='Mongo' />
        <SiReact alt='React logo' style={iconsStyle} id='React' />
        <SiNodedotjs alt='Node.js logo' style={iconsStyle} id='Node' />
        <FaGitAlt alt='Git logo' style={iconsStyle} id='Git' />
        <FaGithub alt='GitHub logo' style={iconsStyle} id='GitHub' />
        <SiBootstrap alt='Bootstrap logo' style={iconsStyle} id='Bootstrap' />
      </figure>
    </main>
  );
};

export default About;
