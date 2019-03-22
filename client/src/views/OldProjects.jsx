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

      /* 

        Create a React Router here

          Each route represents a new view tree node

          Routes I want to have

            - Home
              -- Most recent Project
              -- Future projects
              -- Possible github integrations
              -- Searchable list of all projects

            - List
              -- Use current Projects view as the 'list' view
              -- Index will be passed in via the URL, this will allow projects to be found by an indexable list
              
            - Direct slug
              -- Entering in a slug will take you to the page dedicated directly for that page
              -- Create a slug for each project
              -- When component will mount, grab the project from the projects using the slug
                --- if no slug, redirect to project home page
      
      */

      <main id="projects-page">
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