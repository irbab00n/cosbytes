import React from 'react';
import projects from '../../../lib/projects';

import ProjectTechLabelList from '../ProjectTechLabelList';
import ImageCarousel from '../../ImageCarousel';

class CurrentProject extends React.Component {
  constructor(props) {
    super(props);
  }

  selectProject(slug) {
    let selected = null;
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].slug === slug) {
        selected = projects[i];
        break;
      }
    }
    return selected;
  }

  render() {
    const { params } = this.props.match;
    let project = this.selectProject(params.project);
    console.log(project);

    return(
      <section className="projects-view-wrapper">
        <div className="projects-view-section">
          <div className="inner-wrapper">
            <div className="half-column">
              <div className="inner-wrapper">
                <h1 className="margin-20">{project.title}</h1>
              </div>
            </div>
            <div className="half-column">
              <div className="inner-wrapper anchor-right">
                <ProjectTechLabelList imageTags={project.stack}/>
              </div>
            </div>
          </div>
        </div>
        <div className="projects-view-section">
          <div className="inner-wrapper">
            <ImageCarousel 
              pictures={project.pictures}
            />
          </div>
        </div>
        <div className="projects-view-section">
          <div className="spacer-element-20"></div>
          <div className="spacer-element-20"></div>
        </div>
        <div className="projects-view-section">
          <div className="inner-wrapper">
            <div className="full-column">
              <div className="inner-wrapper">
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="projects-view-section">
          <div className="spacer-element-20"></div>
          <div className="spacer-element-20"></div>
        </div>
      </section>
    );

  }
}

export default CurrentProject;