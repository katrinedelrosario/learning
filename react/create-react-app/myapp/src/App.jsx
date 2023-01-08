import './App.scss';
import { Footer } from './components/partials/footer/footer';
import { Header } from './components/partials/header/header';
import { Main } from './components/partials/main/main';
import { NavArr, Nav } from './components/partials/nav/nav';

function App () {
  return (
    <div className='App'>
      <Header pageTitle='☕️ welcome to this coffee ipsum ☕️'/>
      <Main />
      <Nav data={NavArr}/>
      <Footer />
    </div>
  )
}

export default App;