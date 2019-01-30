import React from 'react';
import { Link } from 'react-router-dom';
/* REDUX */
import { connect } from 'react-redux';
import dispatchMappedActions from '../../../redux/dispatchMappedActions';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false
    };
    this.buildCategoriesList = this.buildCategoriesList.bind(this);
    this.toggleShowList = this.toggleShowList.bind(this);
  }

  buildCategoriesList() {
    const { storage } = this.props.views.blog.categories;

    return storage.map(category => {
      return (
        <li key={`category-${category.slug}`} onClick={this.toggleShowList}>
          <Link to={`/blog/category/${category.slug}`}>
            {category.name}
          </Link>
        </li>
      );
    });
  }

  toggleShowList() {
    this.setState({
      showList: !this.state.showList
    });
  }

  render() {
    const { showList } = this.state;

    return (

      <div className="inner-wrapper categories-wrapper">
        <h4>See Posts From</h4>
        <div className="dropdown-wrapper">
          <div className="selection-arrow-wrapper" onClick={this.toggleShowList}>
            <span className="label">Category</span>
            <i className={`fas fa-angle-down arrow ${showList ? 'show' : ''}`}></i>
          </div>
          <ul className={showList ? 'show' : ''}>
            {
              showList ?
                this.buildCategoriesList() :
                null
            }
          </ul>
        </div>
      </div>

    );

  }
}

const ConnectedCategories = connect(
  state => state,
  dispatchMappedActions
)(Categories);

export default ConnectedCategories;