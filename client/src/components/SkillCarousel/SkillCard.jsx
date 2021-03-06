import React from 'react';

export default class SkillCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    var { isMobile, isPortrait } = this.props;
    var { description, image, title } = this.props.skill;

    return (
      <div className={`skill-card ${isMobile ? 'mobile-landscape' : ''} ${isPortrait ? 'mobile-portrait' : ''}`}>
        <h2 className="skill-card-title no-select">{title}</h2>
        <img src={image} className="skill-card-image"/>
        <center className="skill-card-description">
          {
            description.split('*').map((line, index) => {
              return (
                <span
                  key={`${title.toLowerCase()}-description-line-${index}`}
                  className="no-select"
                >
                  {line}
                </span>
              );
            })
          }
        </center>
      </div>
    );
  }
}
