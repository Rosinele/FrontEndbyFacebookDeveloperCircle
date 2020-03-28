import React, { Profiler } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

const APP_CONTAINER_NAME = 'app-container';

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route
          exact
          path="/"
          render={() => (
            requireAuthentication()
              ? <Redirect to="/login" />
              : <FeedContainer />
          )}
        />
        <Route
          exact
          path="/register"
          render={() => (
            requireAuthentication()
              ? <Redirect to="/" />
              : <RegisterContainer />
          )}
        />
        <Route
          exact
          path="/login"
          render={() => (
            requireAuthentication()
              ? <Redirect to="/" />
              : <LoginContainer />
          )}
        />
        <Route
          exact
          path="/user/:user_id"
          render={props => (
            requireAuthentication()
              ? <Redirect to="/login" />
              : <ProfilerContainer {...props} />
          )}
        />
        <Route
          exact
          path="/post/:post_id"
          render={props => (
            requireAuthentication()
              ? <Redirect to="/login" />
              : <PostContainer />
          )}
        />
      </div>
    </Router>
  </Provider>
);

window.addEventListener('DOMContentLoaded', () => {
  let appContainer = document.getElement(APP_CONTAINER_NAME);

  if (!appContainer) {
    appContainer = document.createElement('DIV');
    appContainer.id = APP_CONTAINER_NAME;
    document.body.appendChild(appContainer);
  }

  render(<App />, appContainer);
});


