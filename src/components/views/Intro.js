import { setWindowTitle } from '../../functions/common';
import '../../styles/Intro.css';

const Intro = () => {
  setWindowTitle('Intro');

  return (
    <main id='intro'>
      <figure>
        <img src={require('../../imgs/Maki.jpg')} alt='Profile' />
      </figure>
      <section id='presentation'>
        <h2>
          Hi everyone, I'm Esteban Villegas and this is my first portfolio.
        </h2>
        <p>
          At the moment I'm doing the bootcamp in <b>FrontEnd Development</b> of
          Makaia. I'm a young man who loves to investigate, to work in teams and
          reach good results in what I do. I am very curious and I'm always
          ready to learn new things. I enjoy to study, watch some serie or
          movie, read some of literature or philosophy and write code.
        </p>
      </section>
    </main>
  );
};

export default Intro;
