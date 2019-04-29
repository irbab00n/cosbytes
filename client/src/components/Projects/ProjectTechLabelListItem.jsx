import React from 'react';
import stackImages from '../../lib/stackImages';

const ProjectTechLabelListItem = (props) => (
  <li>
    <label title={props.imageTag}>
      <img src={stackImages[props.imageTag]}/>
    </label>
  </li>
);

export default ProjectTechLabelListItem;