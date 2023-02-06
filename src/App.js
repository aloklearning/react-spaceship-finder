import React from 'react';
import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome';

import {
  Route,
  Routes,
  BrowserRouter as Router
} from 'react-router-dom';

const App = () => {
  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} exact/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
