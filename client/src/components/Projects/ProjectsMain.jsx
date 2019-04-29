import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

import ProjectSectionScrollTarget from './ProjectSectionScrollTarget';
import ProjectsMainListItem from './ProjectsMainListItem';
import ProjectsMainSection from './ProjectsMainSection';
import SpinningGearBanner from './SpinningGearBanner';

import projects from '../../lib/projects';

const mostRecent = projects[0];
const favorite = projects[1];

const ProjectsMain = (props) => (
  <section className="projects-view-wrapper">
    {/* React Helmet page title */}
    <Helmet>
      <title>cosbytes | Projects | Home</title>
    </Helmet>
    {/* Spinning Gear Banner */}
    <SpinningGearBanner />
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
    {/* LIST OF PROJECTS */}
    <div id="full-list" className="projects-view-section">
      <div className="inner-wrapper">
        <ProjectSectionScrollTarget
          callToAction={'My Full list of projects'}
          sectionId={'full-list'}
        />
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

export default ProjectsMain;