import React from 'react';
import { Link } from 'react-router-dom';
/* REDUX */
import { connect } from 'react-redux';
import dispatchMappedActions from '../../redux/dispatchMappedActions';

import { Helmet } from 'react-helmet';
import BlogListBlank from './BlogListBlank';
import BlogListItem from './BlogListItem';
import BlogSideTrack from './SideTrack/';
import Footer from '../Footer/'

import areObjectsDeepEqual from '../../lib/helpers/areObjectsDeepEqual';
import capitolizeFirstCharacterInString from '../../lib/helpers/capitolizeFirstCharacterInString';

class BlogList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      titleContent: 'Welcome to my Blog'
    };
    this.buildBlogPostList = this.buildBlogPostList.bind(this);
    this.buildBreadCrumb = this.buildBreadCrumb.bind(this);
    this.setTitleContent = this.setTitleContent.bind(this);
  }

  componentWillMount() {
    var { params } = this.props.match;

    this.setTitleContent(params);
    this.props.actions.fetchBlogPostsWithConfig(params);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { loaded } = nextState;
    const { posts } = nextProps.views.blog;
    let updatedState = {};

    /* 
      If the match object changes, indicating the user changing the url 
      via a React Router Link, fetch posts for the new params 
    */
    if (!areObjectsDeepEqual(this.props.match, nextProps.match)) {
      this.setTitleContent(nextProps.match.params);
      this.props.actions.fetchBlogPostsWithConfig(nextProps.match.params);
      updatedState.loaded = false;
    }

    if (posts.fetched && !posts.fetching && !loaded) {
      updatedState.loaded = true;
    }

    if (Object.keys(updatedState).length > 0) {
      this.setState(updatedState);
    }

    return true;
  }

  buildBlogPostList(posts, match) {
    if (posts.length === 0) {
      return <BlogListBlank />;
    } else {
      return posts.map((post, index) => {
        return (
          // PASS IN:
          // post
          // match
          <BlogListItem
            key={`blog-list-item-${index}`}
            post={post}
            match={match}
          />
        )
      })
    }    
  }

  buildBreadCrumb(params) {
    const filterLabelCache = {
      category: 'Category',
      page: 'Page',
      tag: 'Tag'
    };
    
    var paramKeys = Object.keys(params);
    var filterType = paramKeys.length > 0 ? filterLabelCache[paramKeys[0]] : '';
    // split by every -
    // for each word, capitolize the first character
    var filterName = params[paramKeys[0]].split('-').map(word => (capitolizeFirstCharacterInString(word))).join(' ');

    console.log('filter type: ', filterType);
    console.log('filter name: ', filterName);

    return (
      <div className="filter-breadcrumb-wrapper">
        <Link to="/blog">Blog</Link><span>{String.fromCharCode(10095)}</span><h4>{filterType}</h4><span>{String.fromCharCode(10095)}</span><h4>{filterName}</h4>
      </div>
    );
  }

  /**
   * Uses the key of the 'params' object to render a different title on the page
   * @param {Object} params - 'params' property from the Match object
   */
  setTitleContent(params) {
    const titleCache = {
      category: 'Blog Posts by Category',
      page: 'Blog Posts by Page',
      tag: 'Blog Posts by Tag'
    };

    var paramKeys = Object.keys(params);
    var titleContent = paramKeys.length > 0 ? titleCache[paramKeys[0]] : 'Welcome to my Blog';

    this.setState({
      titleContent
    });
  }

  render() {
    const { loaded, titleContent } = this.state;
    const { match } = this.props;
    const { meta, posts } = this.props.views.blog.posts.storage;
    const { next_page, previous_page } = meta;

    return (
      <section id="blog-list" className="blog-view-wrapper">

        <div id="blog-title" className="inner-wrapper blog-title-wrapper">
          <Helmet>
            <title>cosbytes | Blog</title>
          </Helmet>
          <h1>{titleContent}</h1>
        </div>

        <div id="blog-meta" className="inner-wrapper blog-meta-wrapper">
          {
            this.buildBreadCrumb(match.params)
          }
          {/* <div>Meta Title Block</div> */}
          {/* <div>Social Share Block</div> */}
        </div>

        <div id="blog-content" className="inner-wrapper blog-content-wrapper">
          <div id="blog-main-track">
            {
              this.buildBlogPostList(posts, match)
            }
          </div>

          {/* Blog side track */}
          <BlogSideTrack />
        </div>


        {/* IF THERE IS A PREVIOUS OR NEXT PAGE, DISPLAY A LINK TO THAT NEXT PAGE */}
        {/* UNTIL THERE ARE MORE THAN 10 POSTS, THESE WILL NOT SHOW */}

        <div>
          {/* LINK USERS REACT ROUTER PAGINATION TO BE ABLE TO PASS IN THE UPDATED PAGE TO THE NEXT INVOCATION OF THIS PAGE */}
          {previous_page ? <Link to={`${match.url}/p/${previous_page}`}>Prev</Link> : null}

          {next_page ? <Link to={`${match.url}/p/${next_page}`}>Next</Link> : null}
        </div>

        <div className="blog-bottom-spacer"/>

        {
          loaded ?
            <Footer /> :
            null   
        }

      </section>
    );
  }
}

const ConnectedBlogList = connect(
  state => state,
  dispatchMappedActions
)(BlogList);

export default ConnectedBlogList;