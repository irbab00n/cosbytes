import React from 'react';

const ImageDots = (props) => {
  const { currentIndex, pictures, setCurrentIndex } = props;

  return (
    <ul className="image-dot-container">
      {
        pictures.map((slide, index) => {
          return (
            <li
              key={`slide-selector-${index}`}
              className={`${currentIndex === index ? 'selected' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          );
        })
      }
    </ul>
  );
};

export default ImageDots;