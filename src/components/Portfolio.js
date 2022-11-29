import '../styles/Portfolio.css';
import CardPortfolio from './Card';

const Portfolio = () => {
  return (
    <main id='portfolio'>
      <h1>PORTFOLIO</h1>
      <section className='card-container'>
        <CardPortfolio
          link='https://github.com/jeva2002/e-commerce-js'
          title='eCommerce'
          text='A partir de unos requisitos específicos se construye un e-commerce con JS, CSS y HTML'
        />
        <CardPortfolio
          link='https://github.com/jeva2002/cajero-jsvanilla'
          title='Cajero JS'
          text='A partir de unos requisitos se plantea la lógica de un cajero según estos con JS'
        />
        <CardPortfolio
          link='https://github.com/jeva2002/estate-agency-JS-HTML-CSS'
          title='Estate agency'
          text='A partir de unos requisitos se crea una aplicación de inmuebles con JS, CSS y HTML'
        />
        <CardPortfolio
          link='https://github.com/jeva2002/form-js'
          title='Form'
          text='A partir de unos requisitos específicos se maneja un formulario con validaciones y almacenamiento de datos con JS, CSS y HTML'
        />
      </section>
    </main>
  );
};

export default Portfolio;
