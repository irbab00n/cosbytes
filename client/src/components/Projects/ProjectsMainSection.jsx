import React from 'react';
import { Link } from 'react-router-dom';

import ImageCarousel from '../ImageCarousel';

import stackImages from '../../lib/stackImages';

class ProjectMainSection extends React.Component {
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

    const { callToAction, project, sectionId } = this.props;

    return (
      <div id={sectionId} className="projects-view-section">
        <div className="inner-wrapper">
          <div className="full-column most-recent-navigation">
            <i className="fas fa-arrow-circle-down most-recent-navigation-arrow" onClick={() => this.scrollToTargetId(sectionId)}></i>
            <h4 className="center" onClick={() => this.scrollToTargetId(sectionId)}>{callToAction}</h4>
          </div>
          <div className="half-column">
            <div className="inner-wrapper">
              <h2>{project.title}</h2>
              <ul className="project-tech-wrapper">
                {
                  this.buildTechLabelImages(project.stack)
                }
              </ul>
              <div className="project-description-wrapper">
                {project.overview}
              </div>
              <div className="project-button-row">
                <a href={project.link} target="_blank"><button className="project-button">Go to App</button></a>
                <Link to={`/projects/project/${project.slug}`}>Learn More</Link>
              </div>
            </div>
          </div>
          <div className="half-column">
            <div className="inner-wrapper">
              <ImageCarousel 
                pictures={project.pictures}
                title={project.title}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectMainSection;