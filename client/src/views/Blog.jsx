import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
/* REDUX */
import { connect } from 'react-redux';
import dispatchMappedActions from '../redux/dispatchMappedActions';

import BlogMain from '../components/Blog/BlogMain';
import BlogList from '../components/Blog/BlogList';
import BlogPost from '../components/Blog/BlogPost';
import Navbar from '../components/Navbar';

class Blog extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false
    };
  }

  componentDidMount() {
    this.props.actions.fetchBlogCategories();
    this.props.actions.fetchBlogTags();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.views.blog.currentPost.error && !this.state.shouldRedirect) {
      this.props.actions.setBlogCurrentPostError(false);
      this.setState({shouldRedirect: true});
    }
    if (!prevProps.views.blog.currentPost.error && this.state.shouldRedirect) {
      this.setState({shouldRedirect: false});
    }
  }
  
  render() {
    const { shouldRedirect } = this.state;
    const { url: blogHomeURL } = this.props.match;
    
    return (
      <main className="blog-page-layout">
        <Navbar />
        <Switch>
          <Route exact path={blogHomeURL} component={BlogMain} />
          <Route path={`${blogHomeURL}/p/:page`} component={BlogList} />
          <Route path={`${blogHomeURL}/category/:category`} component={BlogList} />
          <Route path={`${blogHomeURL}/tag/:tag`} component={BlogList} />
          <Route path={`${blogHomeURL}/post/:slug`} render={({ match }) => {
            return shouldRedirect ? <Redirect to={blogHomeURL} /> : <BlogPost match={match} />
          }} />
          <Route path={`*`} render={() => <Redirect to={blogHomeURL} />} />
          {/* If the user attempts to  */}
        </Switch>
      </main>
    );
  }
}

const ConnectedBlog = connect(
  state => state,
  dispatchMappedActions
)(Blog);

export default ConnectedBlog;