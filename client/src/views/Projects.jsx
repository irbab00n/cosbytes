import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import ProjectsMain from '../components/Projects/ProjectsMain';
import OldProjects from './OldProjects';

class Projects extends React.Component { 
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const { match } = this.props;

    return (
      <main className="project-page-layout">
        <Switch>
          <Route exact path={match.url} component={ProjectsMain} />
          <Route path={`${match.url}/list`}  component={OldProjects} />
          {/* <Route exact path={`${match.url}/post`} render={() => (<Redirect to={match.url}/>)} /> */}
          {/* <Route path={`${match.url}/category/:category`}  component={BlogList} /> */}
          {/* <Route path={`${match.url}/tag/:tag`}  component={BlogList} /> */}

          {/* <Route path={`${match.url}/post/:slug`} component={BlogPost} /> */}
        </Switch>
      </main>
    );

  }
}

export default Projects;