import React from 'react';

const ImagePanel = (props) => (
  <div className="image-container-image" style={props.currentImage} onClick={props.toggleShowModal}/>
);

export default ImagePanel;