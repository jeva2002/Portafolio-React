import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/NavComponent';
import Intro from './components/Intro';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavComponent></NavComponent>
      <Intro></Intro>
      <Footer></Footer>
    </>
  );
}

export default App;
