import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Footer from '../components/Footer/';
import Navbar from '../components/Navbar';
import CurrentProject from '../components/Projects/CurrentProject';
import ProjectsMain from '../components/Projects/ProjectsMain';

const Projects = (props) => (
  <main className="project-page-layout">
    <Navbar />
    <Switch>
      <Route exact path={props.match.url} component={ProjectsMain} />
      <Route path={`${props.match.url}/project/:project`} component={CurrentProject} />
      <Route render={() => <Redirect to={props.match.url} />} />
      {/* <Route path={`${match.url}/tag/:tag`}  component={BlogList} /> */}

      {/* <Route path={`${match.url}/post/:slug`} component={BlogPost} /> */}
    </Switch>
    <Footer />
  </main>
);

export default Projects;