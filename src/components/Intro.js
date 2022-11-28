import '../styles/Intro.css';

const Intro = () => {
  return (
    <section id='intro'>
      <figure>
        <img src={require('../imgs/Maki.jpg')} alt='Profile' />
      </figure>
      <div id='presentation'>
        <h2>
          Hi everyone, I'm Esteban Villegas and this is my first portfolio.
        </h2>
        <p>
          At the moment I'm doing the bootcamp in <b>FrontEnd Development</b> of
          Makaia. I'm a young man who loves to investigate, to work in teams and
          reach good results in what I do. I am very curious and always I'm
          ready to learn new things. I enjoy to study, watch some serie or
          movie, read some of literature or philosophy and write code.
        </p>
      </div>
    </section>
  );
};

export default Intro;
