import React from 'react';

export default class ProjectsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      imageIndex: 0,
      intervalId: null
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.incrementImageIndex = this.incrementImageIndex.bind(this);
    this.selectListItem = this.selectListItem.bind(this);
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

  selectListItem(e) {
    const { onSelectFunction } = this.props;
    onSelectFunction();
    e.currentTarget.scrollIntoView({behavior: 'smooth', inline: 'start'});
  }

  render() {
    const { imageIndex } = this.state;
    const { project, selected } = this.props;

    return (

      <div 
        className={`inner-wrapper projects-list-item ${selected ? 'selected' : ''}`}
        onClick={this.selectListItem}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >

        <div className="list-item-split-wrapper">
          <h4>{project.title}</h4>
          <div className="list-item-image-wrapper">
            <div className="image" style={
              {
                background: `url(${project.thumbnails[imageIndex].link})`
              }
            }/>
          </div>
        </div>

      </div>
      
    );

  }
}