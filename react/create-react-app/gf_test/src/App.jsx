import './App.scss';
import { Footer } from './components/partials/footer/footer';
import { Header } from './components/partials/header/header';
import { Main } from './components/partials/main/main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
