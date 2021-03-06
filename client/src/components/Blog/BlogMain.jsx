import React from 'react';
import { Link } from 'react-router-dom';
/* REDUX */
import { connect } from 'react-redux';
import dispatchMappedActions from '../../redux/dispatchMappedActions';

import { Helmet } from "react-helmet";
import BlogListItem from './BlogListItem';
import BlogSideTrack from './SideTrack/';
import Footer from '../Footer/'

class BlogMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentWillMount() {
    var config = {};
  
    this.props.actions.fetchBlogPostsWithConfig(config);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { loaded } = nextState;
    const { posts } = nextProps.views.blog;
    let updatedState = {};

    if (posts.fetched && !posts.fetching && !loaded) {
      updatedState.loaded = true;
    }

    if (Object.keys(updatedState).length > 0) {
      this.setState(updatedState);
    }

    return true;
  }


  render() {
    const { loaded } = this.state;
    const { match } = this.props;
    const { meta, posts } = this.props.views.blog.posts.storage;
    const { next_page, previous_page } = meta;

    return (
      <section id="blog-list" className="blog-view-wrapper">

        <div id="blog-title" className="inner-wrapper blog-title-wrapper">
          <Helmet>
            <title>cosbytes | Blog</title>
          </Helmet>
          <h1>Welcome to my Blog</h1>
        </div>

        <div id="blog-meta" className="inner-wrapper blog-meta-wrapper">
          {/* <div>Meta Title Block</div> */}
          {/* <div>Social Share Block</div> */}
        </div>

        <div id="blog-content" className="inner-wrapper blog-content-wrapper">
          <div id="blog-main-track">
            {
              loaded ? 
                posts.map((post, index) => {
                return (
                  <BlogListItem
                    key={`blog-list-item-${index}`}
                    post={post}
                    match={match}
                  />
                )
              }) : <div className="blog-list-item loading"></div>// ADD IN LOADING EFFECT HERE
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

const ConnectedBlogMain = connect(
  state => state,
  dispatchMappedActions
)(BlogMain);

export default ConnectedBlogMain;