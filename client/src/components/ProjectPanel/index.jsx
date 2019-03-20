import React from 'react';
import ReactDOM from 'react-dom';
import { isMobile } from 'react-device-detect';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import ImageCarousel from '../ImageCarousel';

import Footer from '../Footer/';

const images = {
  'AWS': 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/aws-ec2.png',
  'Express': 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/express-bw-200.png',
  'Heroku': 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/heroku-500.png',
  'JS': 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/jsLogo_619x619.jpg',
  'jQuery': 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/jquery.png',
  'MongoDB': 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/mongodb.png',
  'Node': 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/nodejs-512.png',
  'Postgres': 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/postgres.png',
  'React': 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/react_512x512.png',
  'Redux': 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/redux.png',
  'React-Router': 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/react-router.png',
  'Sass': 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/sass-256.png',
  'Webpack': 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/webpack.png'
};

export default class ProjectPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPortrait: window.innerHeight > window.innerWidth,
      showContent: false
    };
    this.buildContributorList = this.buildContributorList.bind(this);
    this.buildImageCarouselElements = this.buildImageCarouselElements.bind(this);
    this.buildTechLabelImages = this.buildTechLabelImages.bind(this);
    this.renderCarousel = this.renderCarousel.bind(this);
  }

  componentDidMount() {
    if ('onorientationchange' in window) {
      window.addEventListener("orientationchange", () => {
        this.setState({
          isPortrait: !this.state.isPortrait
        });
        // console.log("onorientationchange");
      }, false);
    }
    
    if ('onresize' in window) {
        window.addEventListener("resize", () => {
          this.forceUpdate();
          console.log("resize");
        }, false);
    }

    setTimeout(() => {
      this.setState({showContent: true});
    } , 200);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { currentIndex, fadeOut } = nextProps;
    let updatedState = {};
    
    // If the fadeOut from the parent toggles true
    if (fadeOut === true && fadeOut !== this.props.fadeOut) {
      updatedState.showContent = false; // toggle off the content
    }

    // If the currentIndex from the parent changes
    if (currentIndex !== this.props.currentIndex) {
      updatedState.showContent = true; // toggle the content on
      ReactDOM.findDOMNode(this).scrollTop = 0; // scroll the element back to the top
    }

    // Detects if state needs to be updated
    if (Object.keys(updatedState).length > 0) {
      this.setState(updatedState);
    }

    // Component will always re-render when props change
    return true;
  }

  buildContributorList(contributors) {
    return contributors.map((contributor, index) => {
      return (
        <li
          key={`contributor-${index}`}
        >
          {contributor}
        </li>
      );
    });
  }

  buildImageCarouselElements(pictures) {
    const { isPortrait } = this.state; 
    return pictures.map((picture, index) => {
      return (
        <div key={`image-carousel-image-${index}`}>
          <img src={picture.link} />
          {
            isPortrait ?
              null :
              <p className="legend">{picture.description}</p>
          }
        </div>
      );
    });
  }
  
  /* Goes through the tags and matches the appropriate image for the tag */
  buildTechLabelImages(imageTags) {
    return imageTags.map((imageTag, index) => {
      return (
        <li key={`tech-label-image-${index}`}>
          {/* Look up the tag in the image cache, pull out the url, set as img src */}
          <label title={imageTag}><img src={images[imageTag]}/></label>
        </li>
      );
    });
  }

  renderCarousel(pictures) {
    const { isPortrait } = this.state;
    let width = isMobile ? '600px' : '980px';
    window.innerWidth <= 1439 && window.innerWidth > 1024 ? width = '700px' : null;
    window.innerWidth <= 1024 && !isMobile ? width = '540px' : null;
    window.innerWidth > 2000 ? width = '1440px' : null;
    window.innerWidth > 2560 ? width = '1920px' : null;
    isMobile && isPortrait ? width = '350px' : null;

    return (
      <Carousel
        showThumbs={false}
        width={width}
        className='project-image-carousel'
      >
        {
          this.buildImageCarouselElements(pictures)
        }
      </Carousel >
    );
  }

  render() {
    const { isPortrait, showContent } = this.state;
    const { project } = this.props;

    let videoLink = 'https://s3-us-west-1.amazonaws.com/cos-bytes.com/project-background.mp4';
    
    return (
      <section className={`main-track project-panel ${showContent ? 'show' : ''}`}>
        <div className="inner-wrapper no-padding">
          <div className={`project-title-wrapper ${isMobile ? 'col' : ''}`}>
            <h1>{project.title}</h1>
            <ul className="project-tech-wrapper">
              {
                this.buildTechLabelImages(project.stack)
              }
            </ul>
          </div>
        </div>

        <div className="inner-wrapper project-panel full-width jcc dark-bg box-shadow no-padding">
          <ImageCarousel 
            pictures={project.pictures}
            title={project.title}
          />
          <div className="project-panel-background-video">
            <video id="video" style={{height: '100%', width: '100%', objectFit: 'fill'}} autoPlay muted loop>
              <source src={videoLink} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="inner-wrapper no-padding top-spacer">
          <div className="project-split-wrapper">
            <div className="project-links-wrapper">
              {
                project.link !== '' ?
                  <div className="link-line"><i className="fas fa-link"></i><a href={project.link} target="_blank">{project.link}</a></div> :
                  null
              }
              {
                project.repo !== '' ?
                  <div className="link-line"><i className="fab fa-github"></i><a href={project.repo} target="_blank">{project.repo}</a></div> :
                  null
              }
              
            </div>
            <div className="project-contributors-wrapper">
              <h4>Contributors</h4>
              <ul>
                {
                  this.buildContributorList(project.contributors)
                }
              </ul>
            </div>
          </div>
        </div>

        <div className="inner-wrapper no-padding bottom-spacer">
          <div className="project-description-wrapper">
            {project.description}
          </div>
        </div>

        <Footer />

      </section>
    );

  }
}