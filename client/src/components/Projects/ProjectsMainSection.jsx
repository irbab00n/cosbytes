import React from 'react';
import { Link } from 'react-router-dom';

import ImageCarousel from '../ImageCarousel';
import ProjectTechLabelList from './ProjectTechLabelList';
import ProjectSectionScrollTarget from './ProjectSectionScrollTarget';

const ProjectMainSection = (props) => (
  <div id={props.sectionId} className="projects-view-section">
    <div className="inner-wrapper">
      <ProjectSectionScrollTarget
        sectionId={props.sectionId}
        callToAction={props.callToAction}
      />
      {/* DESCRIPTION SECTION */}
      <div className="half-column">
        <div className="inner-wrapper">
          <h2>{props.project.title}</h2>
          <ProjectTechLabelList
            imageTags={props.project.stack}
          />
          <div className="project-description-wrapper">
            {props.project.overview}
          </div>
          <div className="project-button-row">
            <a href={props.project.link} target="_blank"><button className="project-button">Go to App</button></a>
            <Link to={`/projects/project/${props.project.slug}`}>Learn More</Link>
          </div>
        </div>
      </div>
      {/* IMAGE CAROUSEL SECTION */}
      <div className="half-column">
        <div className="inner-wrapper">
          <ImageCarousel 
            pictures={props.project.pictures}
            title={props.project.title}
          />
        </div>
      </div>
    </div>
  </div>
);

export default ProjectMainSection;