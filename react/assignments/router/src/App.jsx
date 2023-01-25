import './App.css';
import React from 'react';


import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom'
import { Home } from './components/pages/home/home';

function App() {
  return (
    <div className="App">
      <h1>welcome</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
    </div>
  );
}

ReactDOM.render((
  <Router>
    <App/>
  </Router>
), document.getElementById('app'))

export default App;
