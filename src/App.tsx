import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { NotFound } from './pages/NotFound';
import { Test } from './pages/Test';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Link to='/'>Some page</Link>
        <Link to='/test'>Test 1</Link>
        <Switch>
          <Route path='/' exact>
            <NotFound />
          </Route>
          <Route path='/test'>
            <Test />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
