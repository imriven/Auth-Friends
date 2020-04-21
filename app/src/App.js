import React from 'react';
import { Link, Route } from "react-router-dom"
import Login from './components/login';
import PrivateRoute from './utils/routes';
import Friendslist from './components/friendList';

function App() {
  return (
    <div>
     <Link to="/login">Login</Link>
     <Route path="/login" component={Login} />
     <PrivateRoute path="/friendslist" component={Friendslist} />
    </div>
  );
}

export default App;
