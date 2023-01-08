import './App.scss';
import { Footer } from './components/partials/footer/footer';
import { Header } from './components/partials/header/header';
import { Main } from './components/partials/main/main';
import { NavArr } from './components/partials/navbar/navbar';

function App () {
  return (
    <div className='App'>
      <Header pageTitle='☕️ welcome to this coffee ipsum ☕️'/>
      <Main />
      <NavArr />
      <Footer />
    </div>
  )
}

export default App;