import Card from 'react-bootstrap/Card';
import { ImGithub } from 'react-icons/im';

const goToRepository = (_link) => {
  window.location.href = _link;
};

const CardPortfolio = (props) => {
  return (
    <Card style={{ width: '19rem' }}>
      <ImGithub
        style={{
          width: '35px',
          height: '35px',
          position: 'absolute',
          top: '90%',
          left: '1rem',
          cursor: 'pointer',
        }}
        onClick={() => {
          goToRepository(props.link);
        }}
      />
      <Card.Img
        variant='top'
        src='https://images.ctfassets.net/yr4qj72ki4ky/legacyBlogPost77Thumbnail/cd4783ad7b35efc4367166a570a9952e/bigstock-Real-Java-Script-Code-Developi-217215433.jpg?q=72'
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardPortfolio;
