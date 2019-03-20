import React from 'react';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    this.buildListItems = this.buildListItems.bind(this);
    this.setCurrentIndex = this.setCurrentIndex.bind(this);
  }

  buildListItems(pictures) {
    const { currentIndex } = this.state;
    return pictures.map((slide, index) => {
      return (
        <li
          key={`slide-selector-${index}`}
          className={`${currentIndex === index ? 'selected' : ''}`}
          onClick={() => this.setCurrentIndex(index)}
        />
      );
    });
  }

  shouldComponentUpdate(nextProps) {
    const { title } = nextProps;
    if (title !== this.props.title && this.state.currentIndex !== 0) {
      console.log('changing projects');
      this.setState({currentIndex: 0});
    }
    return true;
  }

  setCurrentIndex(index) {
    const { pictures } = this.props;
    console.log('setting index: ', index);
    if (index < 0 || index > pictures.length - 1 || index === this.state.currentIndex) {
      return;
    }

    this.setState({
      currentIndex: index
    });
  }

  render() {
    const { currentIndex } = this.state;
    const { pictures } = this.props;

    let link = pictures[currentIndex] === undefined ? '' : pictures[currentIndex].link;

    let currentImage = {
      background: `#000000 url(${link})`
    };

    return (

      <div className={`image-carousel-wrapper`}>
        <div className={`image-container`} style={currentImage}>
          <ul className={`image-dot-container`}>
            {this.buildListItems(pictures)}
          </ul>
          <div className={`image-control-container`}>
            <button className={`${currentIndex === 0 ? 'disabled' : ''}`} onClick={() => this.setCurrentIndex(currentIndex - 1)}>
              {
                currentIndex === 0 ?
                  '' :
                  String.fromCharCode(10094)
              }
            </button>
            <button className={`${currentIndex === pictures.length - 1 ? 'disabled' : ''}`} onClick={() => this.setCurrentIndex(currentIndex + 1)}>
              {
                currentIndex === pictures.length - 1 ?
                  '' :
                  String.fromCharCode(10095)
              }
            </button>
          </div>
        </div>
      </div>

    );

  }
}

export default ImageCarousel;