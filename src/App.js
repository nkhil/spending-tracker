import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { AppStateProvider } from './appContext';
import Basket from './views/Basket';
import GlobalStyle from './components/GlobalStyles';
import Home from './components/Home';

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Switch>
        <AppStateProvider>
          <Route exact path="/"><Home /></Route>
          <Route path="/basket"><Basket /></Route>
        </AppStateProvider>
      </Switch>
    </Router>
  </>
);

export default App;
