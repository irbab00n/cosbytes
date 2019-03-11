import React from 'react';
import { Helmet } from 'react-helmet';

import ProjectsList from '../components/ProjectsList/';
import ProjectPanel from '../components/ProjectPanel/';

import projects from '../lib/projects';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      fadeOut: false,
    };
    this.setCurrentIndex = this.setCurrentIndex.bind(this);
  }

  setCurrentIndex(index) {
    const { currentIndex } = this.state;

    if (currentIndex === index) {return;}

    this.setState({
      fadeOut: true
    }, () => {
      setTimeout(() => {
        this.setState({
          currentIndex: index,
          fadeOut: false
        });
      }, 400);
    });
  }

  render() {
    const { currentIndex, fadeOut } = this.state;
    
    return (
      <main className="projects-page-layout">
        <Helmet>
          <title>cosbytes | Projects</title>
        </Helmet>
        <ProjectsList 
          currentIndex={currentIndex}
          projects={projects}
          onSelectFunction={this.setCurrentIndex}
        />
        <ProjectPanel
          currentIndex={currentIndex}
          project={projects[currentIndex]}
          fadeOut={fadeOut}
        />
      </main>
    );

  }
};