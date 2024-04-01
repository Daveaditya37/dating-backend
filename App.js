// App.js
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ChatPage from './Frontend/ChatPage';
import Home from './Frontend/Home';
import Login from './Frontend/Login';
import MatchPage from './Frontend/MatchPage';
import Register from './Frontend/Register';
import UserProfile from './Frontend/UserProfile';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" Frontend={Home} />
          <Route path="/login" Frontend={Login} />
          <Route path="/register" Frontendrontend={Register} />
          <Route path="/profile" Frontend={UserProfile} />
          <Route path="/matches" Frontend={MatchPage} />
          <Route path="/chat/:userId" Frontend={ChatPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;