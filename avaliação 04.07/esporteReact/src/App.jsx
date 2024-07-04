import React from 'react';
import './App.css';
import Header from './components/Header';
import ClubList from './components/ClubList';

const App = () => {
  return (
    <div className="app">
      <Header />
      <ClubList />
    </div>
  );
};

export default App;
