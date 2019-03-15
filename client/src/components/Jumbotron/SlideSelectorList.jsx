import React from 'react';
import { isMobile } from 'react-device-detect';

export default class SlideSelectorList extends React.Component {
  constructor(props) {
    super(props);
    this.buildListItems = this.buildListItems.bind(this);
    this.handleIndexUpdate = this.handleIndexUpdate.bind(this);
  }

  buildListItems() {
    const { currentIndex, setCurrentIndex, slides } = this.props;
    return slides.map((slide, index) => {
      return (
        <li
          key={`slide-selector-${index}`}
          className={`${currentIndex === index ? 'selected' : ''}`}
          onClick={() => setCurrentIndex(index)}
        />
      );
    });
  }

  handleIndexUpdate(action) {
    const { currentIndex, setCurrentIndex, slides } = this.props;

    switch (action) {
      case 'increment':
        if (currentIndex + 1 !== slides.length) {
          setCurrentIndex(currentIndex + 1);
        }
        break;
      case 'decrement':
        if (currentIndex - 1 >= 0) {
          setCurrentIndex(currentIndex - 1);
        }
        break;
      default: 
        return;
    }
  }

  render() {

    return (
      <div className="bottom-container slide-selector-wrapper">
        {
          isMobile ?
            null :
            <button onClick={() => this.handleIndexUpdate('decrement')}>
              {String.fromCharCode(10094)}
            </button>
        }
        <ul>
          {
            this.buildListItems()
          }
        </ul>
        {
          isMobile ?
            null :
            <button onClick={() => this.handleIndexUpdate('increment')}>
          {String.fromCharCode(10095)}
        </button>
        }
      </div>
    );

  }
}