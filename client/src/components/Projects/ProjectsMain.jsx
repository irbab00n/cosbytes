import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

import ProjectsMainListItem from './ProjectsMainListItem';
import ProjectsMainSection from './ProjectsMainSection';

import projects from '../../lib/projects';

class ProjectsMain extends React.Component {
  constructor(props) {
    super(props);
    this.buildTechLabelImages = this.buildTechLabelImages.bind(this);
    this.scrollToTargetId = this.scrollToTargetId.bind(this);
  }

  /* Takes in an array of image icon tags, and returns the list of icons in image form */
  buildTechLabelImages(imageTags) {
    return imageTags.map((imageTag, index) => {
      return (
        <li key={`tech-label-image-${index}`}>
          {/* Look up the tag in the image cache, pull out the url, set as img src */}
          <label title={imageTag}><img src={stackImages[imageTag]}/></label>
        </li>
      );
    });
  }

  /* Pass in the ID of the element you want to scroll to */
  scrollToTargetId(id) {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  render() {
    // Select my most recent project
    const mostRecent = projects[0];
    // Select my favorite project
    const favorite = projects[1];

    return (
      <section className="projects-view-wrapper">
        {/* React Helmet page title */}
        <Helmet>
          <title>cosbytes | Projects | Home</title>
        </Helmet>
        {/* Spinning Gear Banner */}
        <div className="projects-view-section cosbytes-blue">
          {/* <i id="gear1" className="fas fa-cog large spin"></i> */}
          <div className="projects-banner">
            <span style={{marginLeft: 'auto', marginRight: 'auto', transform: 'translate(-150px, 550px)', zIndex: 50}}>
              <i id="gear2" className="fas fa-cog large"></i>
            </span>
            <span style={{marginLeft: 'auto', marginRight: 'auto', transform: 'translate(150px, 650px)', zIndex: 50}}>
              <i id="gear3" className="fas fa-cog large"></i>
            </span>
            <span style={{transform: 'translate(100px, 800px)'}}>
              <i id="gear4" className="fas fa-cog large"></i>
            </span>
            <span style={{marginLeft: 'auto', transform: 'translate(0px, 800px)'}}>
              <i id="gear5" className="fas fa-cog large"></i>
            </span>
            <div className="banner-container">
              <h1 className="centered white">Welcome to my Projects</h1>
            </div>
          </div>
        </div>
        {/* MOST RECENT PROJECT SECTION */}
        <ProjectsMainSection
          callToAction={'See what I\'ve been up to'}
          project={mostRecent}
          sectionId={'most-recent'}
        />
        {/* PERSONAL FAVORITE PROJECT SECTION */}
        <ProjectsMainSection
          callToAction={'My Personal Favorite'}
          project={favorite}
          sectionId={'personal-favorite'}
        />
        {/* LIST OF PROJECTS SCROLL TARGET */}
        <div id="full-list" className="projects-view-section">
          <div className="inner-wrapper">
            <div className="full-column most-recent-navigation">
              <i className="fas fa-arrow-circle-down most-recent-navigation-arrow" onClick={() => this.scrollToTargetId('full-list')}></i>
              <h4 className="center" onClick={() => this.scrollToTargetId('full-list')}>My Full list of projects</h4>
            </div>
          </div>
        </div>
        {/* LIST OF PROJECTS ACTUAL LIST */}
        <div className="projects-view-section">
          <div className="inner-wrapper">
            {
              projects.map((project, index) => (
                <ProjectsMainListItem
                  key={`project-list-item-${index}`}
                  project={project}
                />
              ))
            }
          </div>
        </div>
        {/* PAGE BOTTOM SPACER */}
        <div className="projects-view-section">
          <div className="spacer-element-20"></div>
          <div className="spacer-element-20"></div>
        </div>
      </section>
    );
  }
}

export default ProjectsMain;