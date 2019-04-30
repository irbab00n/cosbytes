import React from 'react';
import { Link } from 'react-router-dom';

import ImageLoading from '../ImageCarousel/ImageLoading';

class ProjectsMainListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
      intervalId: null
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.incrementImageIndex = this.incrementImageIndex.bind(this);
  }

  handleMouseEnter() {
    let intervalId = setInterval(this.incrementImageIndex, 1250);
    this.setState({
      intervalId
    });
  }

  // clears the interval id stored in the state, and reset the element
  handleMouseLeave() {
    clearInterval(this.state.intervalId);
    this.setState({
      imageIndex: 0,
      intervalId: null
    });
  }

  // Logic for incrementing the index
  incrementImageIndex() {
    let { imageIndex } = this.state;
    let pictureLength = this.props.project.thumbnails.length;
    let nextIndex = imageIndex + 1;  // default: increment by 1
    // if the nextIndex is the length of the thumbnails array
    if (nextIndex === pictureLength) {
      // set the next Index back to 0
      nextIndex = 0;
    }
    // update the index in the state
    this.setState({
      imageIndex: nextIndex
    });
  }

  render() {
    const { imageIndex } = this.state;
    const { project } = this.props;

    return (
      <Link
        to={`projects/project/${project.slug}`}
        className="quarter-column"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >  
        <div className="inner-wrapper">
          <div className="project-list-item-loading">
            <ImageLoading />
          </div>
          <h4>{project.title}</h4>
          <div className="project-thumbnail-wrapper">
            <div className="image" style={
              {
                background: `url(${project.thumbnails[imageIndex].link})`
              }
            }/>
          </div>
        </div>
      </Link>
    )
  }
}

export default ProjectsMainListItem;