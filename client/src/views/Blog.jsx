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
  }

  componentDidMount() {
    this.props.actions.fetchBlogCategories();
    this.props.actions.fetchBlogTags();
  }

  render() {
    const { match } = this.props;

    return (
      <main className="blog-page-layout">
        <Navbar />
        <Switch>
          <Route exact path={match.url} component={BlogMain} />
          <Route path={`${match.url}/p/:page`}  component={BlogList} />
          <Route exact path={`${match.url}/post`} render={() => (
            /* Since cosbytes.com/blog/post returns nothing, redirect it back to the blog main url */
            <Redirect to={match.url}/>
          )} />
          <Route path={`${match.url}/category/:category`}  component={BlogList} />
          <Route path={`${match.url}/tag/:tag`}  component={BlogList} />

          <Route path={`${match.url}/post/:slug`} component={BlogPost} />
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