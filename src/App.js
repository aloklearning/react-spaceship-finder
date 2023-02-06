import React from 'react';
import Home from './components/Home/Home';
import Welcome from './components/Welcome/Welcome';

import {
  Route,
  Routes,
  BrowserRouter as Router
} from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => {
  return (
    <Router>
      {/* This should be static and present in both the pages */}
      <Header />


      {/* Handling Route Elements here */}
      <Routes>
        <Route path='/' element={<Welcome />} exact/>
        <Route path='home' element={<Home />} exact/>
      </Routes>
    </Router>
  );
}

export default App;
