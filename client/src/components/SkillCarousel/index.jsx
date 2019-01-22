import React from 'react';
import { isMobile } from 'react-device-detect';

import SkillCard from './SkillCard';
import Control from './Control';


export default class SkillCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
    this.calculateXTranslate = this.calculateXTranslate.bind(this);
    this.updateCarouselIndex = this.updateCarouselIndex.bind(this);
  }

 /**
  * Produces a style object with the required next transform percentage 
  * @param {Number} index - Represents current item selected from list
  * @param {Number} sizeDivision - Ratio for calculating final transform percent
  * @returns {Object} - Style object containing calculated x-transform
  */
  calculateXTranslate(index, sizeDivision) {
    let cardSize = 100 / sizeDivision;
    let transformPercent = cardSize * index;
    return {transform: `translateX(${-transformPercent}%)`};
  }

  /**
   * Checks for mobile flags, calculates x-transform 
   * and composes skill carousel container
   * @param {*} index - Represents current item selected from list
   * @returns {JSX Element} - Skill Cards mapped from skill data, composed in wrapper container
   */
  renderSkillsCarousel(index) {
    const { skills } = this.props;
    var isPortrait = window.innerHeight > window.innerWidth;

    let sizeDivision = 3; // default is 3

    isMobile ? sizeDivision = 2 : null;
    isMobile && isPortrait ? sizeDivision = 1 : null;

    let classList = `skill-carousel-container`;

    return (
      <div 
        className={classList}
        style={this.calculateXTranslate(index, sizeDivision)}
      >
        {
          skills.map((skill, index) => {
            return (
              <SkillCard 
                isMobile={isMobile}
                isPortrait={isPortrait}
                key={`skill-${index}`}
                skill={skill}
              />
            );
          })
        }
      </div>
    );
  }

 /**
  * Uses update flag to change how index updates in state
  * @param {*} e - Used for preventDefault
  * @param {*} update - Flag specifying how to update the index in state
  */
  updateCarouselIndex(e, update) {
    e.preventDefault();
    const { skills } = this.props;
    let { index } = this.state;
    let isPortrait = window.innerHeight > window.innerWidth;

    let limitValue = 3;

    isMobile ? limitValue = 2 : null; // only allows 2 tiles in mobile landscape
    isPortrait ? limitValue = 1 : null; // only allows 1 tile in mobile portrait

    switch (update) {
      case 'inc':
        if (index === skills.length - limitValue) {
          return;
        }
        this.setState({index: index + 1});
        break;
      case 'dec':
        if (index === 0) {
          return;
        }
        this.setState({index: index - 1});
        break;
      default:
        // if neither command was supplied, do nothing
        console.log(`updateCarouselIndex ran, but didn't receive a valid update command as its input`);
        break;
    }
  }

  render() {
    const { index } = this.state;

    return (
      
      <section id="skill-carousel">
        <div className="skill-carousel-wrapper">
          {
            this.renderSkillsCarousel(index)
          }
          <div className={`skill-carousel-container skill-control-box`}>
            <Control
              // isMobile={isMobile} 
              // height={height}
              direction={'left'}
              updateFunction={this.updateCarouselIndex}
            />          
            <Control
              // isMobile={isMobile} 
              // height={height}
              direction={'right'}
              updateFunction={this.updateCarouselIndex}
            />
          </div>
        </div>
      </section>

    );

  }
}