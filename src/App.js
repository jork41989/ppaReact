import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import Footer from './components/footer/footer'
import { Route, Switch } from 'react-router-dom';
import WebinarMain from './components/webinar_main/webinarMain';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path = "/" component={Home} />
        <Route exact path="/register" component={WebinarMain}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
