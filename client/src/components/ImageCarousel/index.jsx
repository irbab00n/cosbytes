import React from 'react';

import ImageControls from './ImageControls';
import ImageDots from './ImageDots';
import ImageLoading from './ImageLoading';
import ImageModal from './ImageModal';
import ImagePanel from './ImagePanel';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      showModal: false
    };
    this.setCurrentIndex = this.setCurrentIndex.bind(this);
    this.toggleShowModal = this.toggleShowModal.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const { title } = nextProps;
    if (title !== this.props.title && this.state.currentIndex !== 0) {
      this.setState({currentIndex: 0});
    }
    return true;
  }

  setCurrentIndex(index) {
    const { pictures } = this.props;
    if (index < 0 || index > pictures.length - 1 || index === this.state.currentIndex) {
      return;
    }

    this.setState({
      currentIndex: index
    });
  }

  toggleShowModal() {
    document.querySelector('html').classList.toggle('fixed');
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    const { currentIndex, showModal } = this.state;
    const { pictures } = this.props;

    let link = pictures[currentIndex] === undefined ? '' : pictures[currentIndex].link;

    let currentImageBackground = {
      background: `#000000`
    };

    let currentImage = {
      background: `url(${link})`
    };

    return (

      <div className="image-carousel-wrapper">
        {
          showModal ?
            <ImageModal
              currentIndex={currentIndex}
              toggleFunction={this.toggleShowModal}
              pictures={pictures}
              setCurrentIndex={this.setCurrentIndex}
            /> :
            null
        }
        <div className="image-container">
          {/* Loading Container */}
          {
            showModal ?
              null :
              <div className="image-subcontainer centered">
                <ImageLoading />
              </div>
          }
          {/* Image Container */}
          {
            showModal ?
              null :
              <ImagePanel currentImage={currentImage} toggleShowModal={this.toggleShowModal} />
          }
          {/* Image Dot Container */}
          {
            showModal ?
              null :
              <ImageDots currentIndex={currentIndex} pictures={pictures} setCurrentIndex={this.setCurrentIndex} />
          }
          {/* Image Control Container */}
          {
            showModal ?
              null :
              <ImageControls currentIndex={currentIndex} pictures={pictures} setCurrentIndex={this.setCurrentIndex} />
          }
        </div>

      </div>

    );

  }
}

export default ImageCarousel;