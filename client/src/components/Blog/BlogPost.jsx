import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/* REDUX */
import { connect } from 'react-redux';
import dispatchMappedActions from '../../redux/dispatchMappedActions';
import { Helmet } from "react-helmet";

import BlogSideTrack from './SideTrack/';
import Footer from '../Footer/'

import areObjectsDeepEqual from '../../lib/helpers/areObjectsDeepEqual';


class BlogPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  /**
   * Extract the post slug out of the React Router match params and pass fetch the post
   */
  componentWillMount() {
    const { slug } = this.props.match.params;
    this.props.actions.retrieveBlogPostFromSlug(slug);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { loaded } = nextState; /* Used to prevent infinite updating loop when posts are finished fetching */
    const { currentPost } = nextProps.views.blog;
    let updatedState = {};

    /* 
      If the match object changes, indicating the user changing the url 
      via a React Router Link, fetch posts for the new params 
    */
    if (!areObjectsDeepEqual(this.props.match, nextProps.match)) {
      this.props.actions.retrieveBlogPostFromSlug(nextProps.match.params.slug);
      updatedState.loaded = false;
    }

    if (currentPost.fetched && !currentPost.fetching && !loaded) {
      updatedState.loaded = true;
    }

    if (Object.keys(updatedState).length > 0) {
      this.setState(updatedState);
    }

    return true;
  }

  render() {
    const { loaded } = this.state;
    const { post } = this.props.views.blog.currentPost;

    let postInState = Object.keys(post).length > 0;
    
    if (loaded && postInState) {

      return (
        <section id="blog-list" className="blog-view-wrapper">

          {/* Back Button to Blog Home */}
          <div id="blog-title" className="inner-wrapper blog-home-nav-wrapper">
            <Link to="/blog">Back to Blog Home</Link>
          </div>

          <div id="blog-title" className="inner-wrapper blog-title-wrapper">
            <Helmet>
              <title>{post.data.seo_title}</title>
              <meta name="description" content={post.data.meta_description} />
              <meta name="og:image" content={post.data.featured_image} />
            </Helmet>
            <h1>{post.data.title}</h1>
          </div>

          {/* 
            BLOG META BLOCK
            SOCIAL SHARE BLOCK

            Both of these blocks can find their information from the post.data.author prop
          */}
          <div id="blog-meta" className="inner-wrapper blog-meta-wrapper">
            <div className="author-block-wrapper">
              <div className="avatar" style={{background: `url(${post.data.author.profile_image})`}}></div>
              <div className="author-info-block">
                <div className="name">{`Post by ${post.data.author.first_name} ${post.data.author.last_name}`}</div>
                <div className="date">{`Posted ${new Date(post.data.published).toDateString()}`}</div>
              </div>
            </div>
            <div />{/* SOCIAL SHARE BLOCK */}
          </div>

          <div id="blog-content" className="inner-wrapper blog-content-wrapper">
            <div id="blog-main-track"
              dangerouslySetInnerHTML={{__html: post.data.body}}
            />

            {/* SIDE TRACK WILL BE MANAGED SEPERATELY */}
            <BlogSideTrack />
          </div>

          <div className="blog-bottom-spacer"/>

          <Footer />

        </section>
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }
}

const ConnectedBlogPost = connect(
  state => state,
  dispatchMappedActions
)(BlogPost);

export default ConnectedBlogPost;