import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import configureStore from './store';
import Login from './pages/Login';
import Header from './containers/Header';

ReactDOM.render(
  <Provider store={configureStore()}>
        <BrowserRouter>
          <Header />
          <main>
            <Switch>
              <Route exact path="/" render={() => ('Home!')} />
              <Route exact path="/login" render={() => <Login />} />
            </Switch>
          </main>
        </BrowserRouter>
      </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
