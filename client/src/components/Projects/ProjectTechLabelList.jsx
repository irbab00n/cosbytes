import React from 'react';

import ProjectTechLabelListItem from './ProjectTechLabelListItem';

const ProjectTechLabelList = (props) => (
  <ul className="project-tech-wrapper">
    {
      props.imageTags.map((imageTag, index) => {
        return (
          <ProjectTechLabelListItem
            key={`tech-label-image-${index}`}
            imageTag={imageTag}
          />
        );
      })
    }
  </ul>
);

export default ProjectTechLabelList;