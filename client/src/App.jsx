import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from 'react-router-dom';

import Blog from './views/Blog.jsx';
import Main from './views/Main.jsx';
import Projects from './views/Projects.jsx';

import '../sass/main.scss';

/* Make application history available as an export */
export const hist = createBrowserHistory();

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="application-wrapper">
        <Router history={hist}>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/blog" component={Blog}/>            
            <Route path="/projects" component={Projects}/>
          </Switch>
        </Router>
      </div>
    );
  }
};
