import AppRouter from './components/app/approuter/approuter';
import Header from './components/partials/header';
import {ContainerStyle} from './components/styled/container.style'

function App() {
  return (
    <ContainerStyle maxwidth='1024'>
      <Header />
      <AppRouter />
    </ContainerStyle>
  );
}

export default App;
