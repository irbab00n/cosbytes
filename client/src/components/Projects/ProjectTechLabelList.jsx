import React from 'react';

import ProjectTechLabelListItem from './ProjectTechLabelListItem';

const ProjectTechLabelList = (props) => {
  const { imageTags } = props;
  return (
    <ul className="project-tech-wrapper">
      {
        imageTags.map((imageTag, index) => {
          return (
            <ProjectTechLabelListItem
              imageTag={imageTag}
              index={index}
            />
          );
        })
      }
    </ul>
  );
};

export default ProjectTechLabelList;