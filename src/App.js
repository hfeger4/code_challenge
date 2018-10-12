import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import HomepageContainer from './components/homepage';
import CreateWidgetForm from './components/create_widget_form';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomepageContainer />
        <CreateWidgetForm />
      </div>
    );
  }
}

export default App;
