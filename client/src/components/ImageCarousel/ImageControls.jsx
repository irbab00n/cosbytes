import React from 'react';

const ImageControls = (props) => {
  const { currentIndex, pictures, setCurrentIndex } = props;
  return (
    <div className="image-control-container">
      <button className={`${currentIndex === 0 ? 'disabled' : ''}`} onClick={() => setCurrentIndex(currentIndex - 1)}>
        {
          currentIndex === 0 ?
            '' :
            String.fromCharCode(10094)
        }
      </button>
      <button className={`${currentIndex === pictures.length - 1 ? 'disabled' : ''}`} onClick={() => setCurrentIndex(currentIndex + 1)}>
        {
          currentIndex === pictures.length - 1 ?
            '' :
            String.fromCharCode(10095)
        }
      </button>
    </div>
  );
};

export default ImageControls;