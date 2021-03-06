import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';

import './custom.css'
import { Employees } from './components/Employees';
import { Reports } from './components/Reports';
import { Directories } from './components/Directories';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/employees' component={Employees} />
        <Route path='/reports' component={Reports} />
        <Route path='/directories' component={Directories} />
      </Layout>
    );
  }
}
