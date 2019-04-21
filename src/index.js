import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SignIn from './SignIn'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const routing = (
  <Router>
    <div>
      <Menu className="App-body-menu" open={Boolean(true)}>
          <MenuItem component={Link} to="/test" >Home</MenuItem>
        </Menu>
      <Route exact path="/test" component={SignIn} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
