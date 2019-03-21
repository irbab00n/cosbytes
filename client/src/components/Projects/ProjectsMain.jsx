import React from 'react';
import { Helmet } from "react-helmet";

import projects from '../../lib/projects';
import stackImages from '../../lib/stackImages';
import ImageCarousel from '../ImageCarousel';

class ProjectsMain extends React.Component {
  constructor(props) {
    super(props);
    this.buildTechLabelImages = this.buildTechLabelImages.bind(this);
    this.scrollToMostRecentContainer = this.scrollToMostRecentContainer.bind(this);
  }

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

  scrollToMostRecentContainer() {
    document.getElementById('most-recent').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  

  render() {

    const project = projects[0];
    var videoLink = 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/sea-cliffs.mp4';

    return (

      <section className="projects-view-wrapper">
        <Helmet>
          <title>cosbytes | Projects | Home</title>
        </Helmet>

        {/* Projects Banner */}
        <div className="projects-view-section cosbytes-blue">
          {/* <i id="gear1" className="fas fa-cog large spin"></i> */}
          <div className="projects-banner">
            <i id="gear2" className="fas fa-cog large spin-back"></i>
            <i id="gear3" className="fas fa-cog large spin"></i>
            <i id="gear4" className="fas fa-cog large spin-slow"></i>
            <i id="gear5" className="fas fa-cog large spin-back-slow"></i>
            <div className="banner-container">
              <h1 className="centered white">Welcome to my Projects</h1>
            </div>
          </div>
        </div>

        <div id="most-recent" className="projects-view-section">
          <div className="inner-wrapper">
            <div className="full-column most-recent-navigation">
              <i className="fas fa-arrow-circle-down most-recent-navigation-arrow" onClick={this.scrollToMostRecentContainer}></i>
              <h4 className="center" onClick={this.scrollToMostRecentContainer}>See what I've been up to</h4>
            </div>
            <div className="half-column">
              <h2>{project.title}</h2>
              <ul className="project-tech-wrapper">
                {
                  this.buildTechLabelImages(project.stack)
                }
              </ul>
            </div>
            <div className="half-column">
              <ImageCarousel 
                pictures={project.pictures}
                title={project.title}
              />
            </div>
          </div>
        </div>

        <div id="most-recent" className="projects-view-section">
          <div className="inner-wrapper">
            <div className="full-column most-recent-navigation">
              <i className="fas fa-arrow-circle-down most-recent-navigation-arrow" onClick={this.scrollToMostRecentContainer}></i>
              <h4 className="center" onClick={this.scrollToMostRecentContainer}>See what I've been up to</h4>
            </div>
            <div className="half-column">
              <h2>{project.title}</h2>
              <ul className="project-tech-wrapper">
                {
                  this.buildTechLabelImages(project.stack)
                }
              </ul>
            </div>
            <div className="half-column">
              <ImageCarousel 
                pictures={project.pictures}
                title={project.title}
              />
            </div>
          </div>
        </div>
      </section>

    );

  }
}

export default ProjectsMain;