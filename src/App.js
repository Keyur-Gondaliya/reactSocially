import './css/slick.css';
import './css/style.css';
import './css/bootstrap.min.css';
import './css/all.min.css';
import Header from './Components/Landing/Header/Header';
import Footer from './Components/Landing/Footer/Footer';
import MainContent from './Components/Landing/MainContent/MainContent';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
