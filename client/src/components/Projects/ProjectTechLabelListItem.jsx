import React from 'react';
import stackImages from '../../lib/stackImages';

const ProjectTechLabelListItem = (props) => (
  <li key={`tech-label-image-${props.index}`}>
    {/* Look up the tag in the image cache, pull out the url, set as img src */}
    <label title={props.imageTag}><img src={stackImages[props.imageTag]}/></label>
  </li>
);

export default ProjectTechLabelListItem;