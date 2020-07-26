import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store } from 'store';
import { HOME_PAGE } from 'global/routes';
import { Provider } from 'react-redux';
import { LandingPage } from 'pages';
import { ProgressTurn } from 'components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import 'react-multi-carousel/lib/styles.css';

const App = () => (
  <Router>
    <Provider store={store}>
      <ProgressTurn />
      <div className="app-wrapper">
        <Switch>
          <Route 
            path={HOME_PAGE} 
            component={LandingPage} 
          />
        </Switch>
      </div>
    </Provider>
  </Router>
);

export default App;
