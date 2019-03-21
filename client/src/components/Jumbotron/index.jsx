import React from 'react';

import { Link } from 'react-router-dom';
import JumbotronSlide from './JumbotronSlide';
import SlideSelectorList from './SlideSelectorList';

import getRandomIndexFromRange from '../../lib/helpers/getRandomIndexFromRange';

const slides = [
  {
    feature: (show) => (
      <div className={`jumbotron-slide-container ${show ? 'show' : ''} ac jc`}>
        <a href="https://github.com/irbab00n" target="_blank"><button><img src="https://s3-us-west-1.amazonaws.com/cos-bytes.com/github_logo.png"/></button></a>
        <a href="https://www.linkedin.com/in/cosbyts/" target="_blank"><button><img src="https://s3-us-west-1.amazonaws.com/cos-bytes.com/linkedin_logo.png"/></button></a>
        <a href="https://s3-us-west-1.amazonaws.com/cos-bytes.com/resume.pdf" target="_blank"><button className="large-font"><i className="fas fa-file-pdf"></i>&nbsp;Resume</button></a>
      </div>
    ),
    subtitle: 'I like to build things',
    title: 'My name is Thomas Cosby',
    textWhite: true
  },
  {
    feature: (show) => (
      <div className={`jumbotron-slide-container ${show ? 'show' : ''} ac jc`}>
        <Link to="/projects"><button className="large-font"><i className="fas fa-laptop-code"></i>&nbsp;Projects</button></Link>
      </div>
    ),
    subtitle: 'See what I\'ve been working on',
    title: 'My Projects',
    textWhite: true
  },
  {
    feature: (show) => (
      <div className={`jumbotron-slide-container ${show ? 'show' : ''} ac jc`}>
        <Link to="/blog"><button className="large-font"><i className="fas fa-blog"></i>&nbsp;Blog</button></Link>
      </div>
    ),
    subtitle: 'See what\'s been on my mind',
    title: 'My blog',
    textWhite: true
  }
];

const videos = [
  'https://s3-us-west-1.amazonaws.com/cos-bytes.com/beach.mp4',
  'https://s3-us-west-1.amazonaws.com/cos-bytes.com/sea-cliffs.mp4',
  'https://s3-us-west-1.amazonaws.com/cos-bytes.com/rock-cliffs.mp4'
]

export default class Jumbotron extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      fadeOut: false
    };
    this.formatSlides = this.formatSlides.bind(this);
    this.setCurrentIndex = this.setCurrentIndex.bind(this);
  }

  formatSlides(currentIndex, fadeOut) {
    return slides.map((slide, index) => {
      return (
        <JumbotronSlide
          currentIndex={currentIndex}
          fadeOut={fadeOut}
          slide={slide}
        />
      );
    });
  }

  setBackgroundColor(index) {
    switch (index) {
      case 1:
        return 'green-bg';
      case 2:
        return 'orange-bg';
      default:
        return 'default-bg';
    }
  }

  setCurrentIndex(index) {
    const { currentIndex } = this.state;
    if (index === currentIndex) {
      return;
    }

    this.setState({
      fadeOut: true
    }, () => {
      setTimeout(() => {
        this.setState({
          currentIndex: index,
          fadeOut: false
        });
      }, 200);
    });
  }

  render() {
    const { currentIndex, fadeOut } = this.state;
    /*
      This method invocation is using a locally created 'slides' collection.
      If the 'slides' array is removed from this file and stored externally,
      We will need to do 1 of 2 things:
        1. Pass the slides in as an argument to 'formatSlides'
        2. Extract the slides from the props
    */
    let formattedSlides = this.formatSlides(currentIndex, fadeOut);
    let videoLink = videos[getRandomIndexFromRange(0, videos.length - 1)];

    return (
      <section className={`jumbotron-wrapper ${this.setBackgroundColor(currentIndex)}`}>
        <div className="jumbotron-background-video">
          <video id="video" style={{height: '100%', width: '100%', objectFit: 'fill'}} autoPlay muted loop>
            <source src={videoLink} type="video/mp4" />
          </video>
        </div>
        <div className="jumbotron-inner-wrapper">
          {
            formattedSlides[currentIndex]
          }
          <SlideSelectorList
            currentIndex={currentIndex}
            setCurrentIndex={this.setCurrentIndex}
            slides={slides}
          />
        </div>
      </section>
    );

  }
};