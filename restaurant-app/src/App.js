import React from 'react';
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,
        Route,
      } from 'react-router-dom'
import { Navbar,Nav} from 'react-bootstrap'
import Home from './components/Home'
import RestauranstCreate from './components/RestauranstCreate'
import RestauranstDetail from './components/RestauranstDetail'
import RestauranstList from './components/RestauranstList'
import RestauranstSearch from './components/RestauranstSearch'
import RestauranstUpdate from './components/RestauranstUpdate'

function App() {
  return (
    <div className="App">
      <Router>


      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link>
            <Nav.Link href="/list">List</Nav.Link>
            <Nav.Link href="/update">Update</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/list'>
          <RestauranstList />
        </Route>
        <Route path='/create'>
          <RestauranstCreate />
        </Route>
        <Route path='/detail'>
          <RestauranstDetail />
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
      </Router>
    </div>
  );
}

export default App;
