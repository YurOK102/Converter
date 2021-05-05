import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import List from './components/List/List';
import Converter from './components/Converter/Converter';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <>
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/converter" component={Converter} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
