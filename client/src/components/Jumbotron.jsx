import React from 'react';

export default class Jumbotron extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="jumbotron-wrapper default-bg">
        <div className="jumbotron-inner-wrapper">
          Inner wrapper
        </div>
      </div>
    );

  }
};