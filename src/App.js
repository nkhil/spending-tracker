import React from 'react';
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

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Switch>
        <AppStateProvider>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/transactions"><Transactions /></Route>
          <Route exact path="/whatever" render={() => <Transactions />} />
          <Route exact path="/login" render={() => <Login />} />
        </AppStateProvider>
      </Switch>
    </Router>
  </>
);

export default App;
