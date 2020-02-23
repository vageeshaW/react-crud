import React from 'react';
import './App.css';
import CatList from '../src/component/catList';
import Cat from '../src/component/cat';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import CreateCat from './component/createCat';



function App() {
  return (
    <div className="App">
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">List</Link>
        </li>
        <li>
          <Link to="/cat/create">Create Cat</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={CatList} />
        <Route exact path="/cat/create" component={CreateCat} />
        <Route exact path="/cat/:id" component={Cat} />
       
        

      </Switch>
    </div>
  </Router>
       
    </div>
  );
}

export default App;
