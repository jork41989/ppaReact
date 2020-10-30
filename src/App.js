import React from 'react';
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import Footer from './components/footer/footer'
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path = "/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
