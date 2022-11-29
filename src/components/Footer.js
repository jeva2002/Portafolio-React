import '../styles/Footer.css';

const Footer = ({ colors = '' }) => {
  return (
    <footer>
      <p id={colors}>Powered by Esteban Villegas with React and Bootstrap.</p>
    </footer>
  );
};

export default Footer;
