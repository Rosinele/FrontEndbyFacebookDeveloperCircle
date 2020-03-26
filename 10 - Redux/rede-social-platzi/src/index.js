import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';

import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {Provider } from 'react-redux';

const App = () => (
    <Provider store = {store}>
        <ROuter>
          <div>
            <Route
              exact
              path="/"
              render = {() => (
                requireAuthentication()
                ? <Redirect to = "/login"/>
                : <FeedCOntainer/>
              )}>
            </Route>
            <Route
              exact
              path="/"
              render = {() => (
                requireAuthentication()
                ? <Redirect to = "/login"/>
                : <FeedCOntainer/>
              )}>
            </Route>
            <Route
              exact
              path="/"
              render = {() => (
                requireAuthentication()
                ? <Redirect to = "/login"/>
                : <FeedCOntainer/>
              )}>
            </Route>
          </div>
        </ROuter>
    </Provider>
)
ReactDOM.render(<App />,  document.getElementById('root')
);

