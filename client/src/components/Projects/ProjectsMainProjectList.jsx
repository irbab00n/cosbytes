import React from 'react';

import ProjectsMainProjectListItem from './ProjectsMainProjectListItem';
import ProjectSectionScrollTarget from './ProjectSectionScrollTarget';

const sectionId = 'full-list';

const ProjectMainProjectList = (props) => (
  <div id={sectionId} className="projects-view-section">
    <div className="inner-wrapper">
      <ProjectSectionScrollTarget
        callToAction={'My Full list of projects'}
        sectionId={sectionId}
      />
      {
        props.projects.map((project, index) => (
          <ProjectsMainProjectListItem
            key={`project-list-item-${index}`}
            project={project}
          />
        ))
      }
    </div>
  </div>
);

export default ProjectMainProjectList;