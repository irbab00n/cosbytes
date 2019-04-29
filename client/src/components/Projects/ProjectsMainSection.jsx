import React from 'react';
import { Link } from 'react-router-dom';

import ImageCarousel from '../ImageCarousel';
import ProjectTechLabelList from './ProjectTechLabelList';

class ProjectMainSection extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTargetId = this.scrollToTargetId.bind(this);
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
              <ProjectTechLabelList
                imageTags={project.stack}
              />
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