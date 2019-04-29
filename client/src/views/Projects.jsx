import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Footer from '../components/Footer/';
import Navbar from '../components/Navbar';
import ProjectsMain from '../components/Projects/ProjectsMain';

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
        <Navbar />
        <Switch>
          <Route exact path={match.url} component={ProjectsMain} />
          <Route path={`${match.url}/project/:project`} component={ProjectsMain} />
          <Route render={() => (<Redirect to={match.url}/>)} />
          {/* <Route path={`${match.url}/tag/:tag`}  component={BlogList} /> */}

          {/* <Route path={`${match.url}/post/:slug`} component={BlogPost} /> */}
        </Switch>
        <Footer />
      </main>
    );

  }
}

export default Projects;