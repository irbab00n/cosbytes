import React from 'react';

import ImageControls from './ImageControls';
import ImageDots from './ImageDots';
import ImageLoading from './ImageLoading';
import ImagePanel from './ImagePanel';

const ImageModal = (props) => {
  const { currentIndex, pictures, setCurrentIndex, toggleFunction } = props;

  let link = pictures[currentIndex] === undefined ? '' : pictures[currentIndex].link;

  let currentImage = {
    background: `url(${link})`
  };

  return (
    <div className="image-modal-wrapper">
      <div className="modal-control-wrapper">
        <span />
        <button onClick={toggleFunction}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className="modal-body">
          {/* Loading Container */}
          <div className="image-subcontainer centered">
            <ImageLoading />
          </div>
          {/* Image Panel */}
          <ImagePanel currentImage={currentImage} />
          {/* Image Dots */}
          <ImageDots currentIndex={currentIndex} pictures={pictures} setCurrentIndex={setCurrentIndex} />
          {/* Image Controls */}
          <ImageControls currentIndex={currentIndex} pictures={pictures} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
};

export default ImageModal;