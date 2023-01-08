import './App.scss';
import { Footer } from './components/partials/footer/footer';
import { Header } from './components/partials/header/header';
import { Main } from './components/partials/main/main';
import { NavBar } from './components/partials/navbar/navbar';

const App = () => {
  return (
    <div className='App'>
      <Header pageTitle='☕️ welcome to this coffee ipsum ☕️'/>
      <Main />
      <NavBar />
      <Footer />
    </div>
  )
}

export default App;