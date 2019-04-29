import React from 'react';

const scrollToTargetId = (id) => {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};

const ProjectSectionScrollTarget = (props) => (
  <div className="full-column most-recent-navigation">
    <i className="fas fa-arrow-circle-down most-recent-navigation-arrow" onClick={() => scrollToTargetId(props.sectionId)}></i>
    <h4 className="center" onClick={() => scrollToTargetId(props.sectionId)}>{props.callToAction}</h4>
  </div>
);

export default ProjectSectionScrollTarget;