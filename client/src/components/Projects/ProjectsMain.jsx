import React from 'react';
import { Helmet } from "react-helmet";

import projects from '../../lib/projects';
import stackImages from '../../lib/stackImages';
import ImageCarousel from '../ImageCarousel';

class ProjectsMain extends React.Component {
  constructor(props) {
    super(props);
    this.buildTechLabelImages = this.buildTechLabelImages.bind(this);
    this.scrollToTargetId = this.scrollToTargetId.bind(this);
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

  scrollToTargetId(id) {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  

  render() {

    const mostRecent = projects[0];
    const favorite = projects[1];
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
            <i id="gear4" className="fas fa-cog large spin-back-slow"></i>
            <i id="gear5" className="fas fa-cog large spin-slow"></i>
            <div className="banner-container">
              <h1 className="centered white">Welcome to my Projects</h1>
            </div>
          </div>
        </div>

        <div id="most-recent" className="projects-view-section">
          <div className="inner-wrapper">
            <div className="full-column most-recent-navigation">
              <i className="fas fa-arrow-circle-down most-recent-navigation-arrow" onClick={() => this.scrollToTargetId('most-recent')}></i>
              <h4 className="center" onClick={() => this.scrollToTargetId('most-recent')}>See what I've been up to</h4>
            </div>
            <div className="half-column">
              <div className="inner-wrapper">
                <h2>{mostRecent.title}</h2>
                <ul className="project-tech-wrapper">
                  {
                    this.buildTechLabelImages(mostRecent.stack)
                  }
                </ul>
                <div className="project-description-wrapper">
                  {mostRecent.overview}
                </div>
              </div>
            </div>
            <div className="half-column">
              <div className="inner-wrapper">
                <ImageCarousel 
                  pictures={mostRecent.pictures}
                  title={mostRecent.title}
                />
              </div>
            </div>
          </div>
        </div>

        <div id="personal-favorite" className="projects-view-section">
          <div className="inner-wrapper">
            <div className="full-column most-recent-navigation">
              <i className="fas fa-arrow-circle-down most-recent-navigation-arrow" onClick={() => this.scrollToTargetId('personal-favorite')}></i>
              <h4 className="center" onClick={() => this.scrollToTargetId('personal-favorite')}>My Personal Favorite</h4>
            </div>
            <div className="half-column">
              <div className="inner-wrapper">
                <h2>{favorite.title}</h2>
                <ul className="project-tech-wrapper">
                  {
                    this.buildTechLabelImages(favorite.stack)
                  }
                </ul>
                <div className="project-description-wrapper">
                  {favorite.overview}
                </div>
              </div>
            </div>
            <div className="half-column">
              <div className="inner-wrapper">
                <ImageCarousel 
                  pictures={favorite.pictures}
                  title={favorite.title}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="projects-view-section">
          <div className="spacer-element-20"></div>
        </div>
      </section>

    );

  }
}

export default ProjectsMain;