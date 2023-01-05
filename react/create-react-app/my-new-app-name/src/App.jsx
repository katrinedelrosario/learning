import './App.scss';
import Footer from './components/partials/footer/footer';
import Header from './components/partials/header/header';

const App = () => {
  return (
    <div className='App'>
      <Header pageTitle='Welcome, this is the header'/>
      <Footer />
    </div>
  )
}

export default App;