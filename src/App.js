import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { AppStateProvider } from './appContext';
import Transactions from './components/TransactionsHome';
import GlobalStyle from './components/GlobalStyles';
import Home from './components/Home';
import Login from './components/Login';
import firebase from './lib/firebase';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, [currentUser]);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <AppStateProvider>
            <Route exact path="/" render={(props) => <Home {...props} currentUser={currentUser} />} />
            <Route exact path="/transactions" render={(props) => <Transactions {...props} currentUser={currentUser} />} />
            <Route exact path="/login" render={(props) => <Login {...props} currentUser={currentUser} />} />
          </AppStateProvider>
        </Switch>
      </Router>
    </>
  );
};

export default App;
