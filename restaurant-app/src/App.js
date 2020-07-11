import React from 'react';
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,
        Route,
      } from 'react-router-dom'
import Home from './components/Home'
import RestauranstCreate from './components/RestauranstCreate'
import RestauranstList from './components/RestauranstList'
import RestauranstSearch from './components/RestauranstSearch'
import RestauranstUpdate from './components/RestauranstUpdate'
import Login from './components/login'
import Logout from './components/Logout'
import Protected from './components/Protected'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/logout'>
          <Logout />
        </Route>
        {/* <Route exact path='/'>
          <Home />
        </Route> */}
        <Route path='/list'>
          <RestauranstList />
        </Route>
        <Route path='/create'>
          <RestauranstCreate />
        </Route>
        <Route path='/search'>
          <RestauranstSearch />
        </Route>
        <Route path='/update/:id'
          render={props => (
            <RestauranstUpdate {...props}/> 
          )}
          >
        </Route>
        {/*  */}
        {/*  */}
        <Route path='/login'
          render={props => (
            <Login {...props}/>
          )}
          >
        </Route>
        <Protected  path='/' component={Home} />
      </Router>
    </div>
  );
}

export default App;
