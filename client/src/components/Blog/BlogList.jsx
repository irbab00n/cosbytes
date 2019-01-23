import React from 'react';
import { Link } from 'react-router-dom';
import Butter from 'buttercms';

const butter = Butter('99e3c38507f191c5f64f0fc1dd27369ef8bda69e');

export default class BlogHome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      posts: [],
      meta: {
        next_page: null,
        previous_page: null,
      }
    };
    this.fetchPosts = this.fetchPosts.bind(this);
  }

  componentWillMount() {
    var { match } = this.props;
    var page = match.params.page || 1;
    
    this.fetchPosts(page);
  }
  
  componentWillReceiveProps(nextProps) {
    var { match } = nextProps;
    this.setState({loaded: false});
    
    var page = match.params.page || 1;
    
    this.fetchPosts(page);
  }
  
  fetchPosts(page) {
    // console.log('fetching posts with page: ', page);
    butter.post.list({page: page, page_size: 10})
      .then(response => {
        // console.log('response: ', response);
        this.setState({
          loaded: true,
          posts: response.data.data,
          meta: response.data.meta
        });
    });
  }

  render() {
    const { loaded, meta, posts } = this.state;
    const { match } = this.props;

    if (loaded) {
      const { next_page, previous_page } = meta;

      return (
        /* 
          Page Wapper
          -- Page Inner-wrapper
            --- Track
              ---- Item

          -- Main Track
            --- Will contain a formatted list of the blogs retrieved in the fetchPosts method

          -- Side Track
            --- Will contain shorthand navigation components, 'Most Recent', 'Most Read'
        */
        <section id="blog-list" className="blog-view-wrapper">

          <div id="blog-title" className="inner-wrapper blog-title-wrapper">
            <h1>Blog Title Block</h1>
          </div>

          <div id="blog-meta" className="inner-wrapper blog-meta-wrapper">
            <div>Meta Title Block</div>
            <div>Social Share Block</div>
          </div>

          <div id="blog-content" className="inner-wrapper blog-content-wrapper">
            <div id="blog-main-track">
              {posts.map(post => {
                return (
                  <div key={post.slug} className="inner-wrapper">


                      <Link to={`${match.url}/post/${post.slug}`}>{post.title}</Link>


                  </div>
                )
              })}
            </div>
            <div id="blog-side-track">Side Track</div>
          </div>


          {/* IF THERE IS A PREVIOUS OR NEXT PAGE, DISPLAY A LINK TO THAT NEXT PAGE */}
          {/* UNTIL THERE ARE MORE THAN 10 POSTS, THESE WILL NOT SHOW */}

          <div>
            {/* LINK USERS REACT ROUTER PAGINATION TO BE ABLE TO PASS IN THE UPDATED PAGE TO THE NEXT INVOCATION OF THIS PAGE */}
            {previous_page ? <Link to={`${match.url}/p/${previous_page}`}>Prev</Link> : null}

            {next_page ? <Link to={`${match.url}/p/${next_page}`}>Next</Link> : null}
          </div>

          <div className="blog-bottom-spacer"/>


        </section>
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      )
    }
  }
}
