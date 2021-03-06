import * as types from '../../types';

const INITIAL_STATE = () => ({
  categories: {
    storage: {
      posts: [],
      meta: {
        next_page: null,
        previous_page: null,
      },
    },
    fetched: false,
    fetching: false,
    error: false,
    errorMessage: ''
  },
  currentPost: {
    post: {},
    fetched: false,
    fetching: false,
    error: false,
    errorMessage: ''
  },
  posts: {
    storage: {
      posts: [],
      meta: {
        next_page: null,
        previous_page: null,
      },
    },
    fetched: false,
    fetching: false,
    error: false,
    errorMessage: ''
  },
  sidetrack: {
    mostRecent: {
      post: {},
      fetched: false,
      fetching: false,
      error: false,
      errorMessage: ''
    }
  },
  tags: {
    storage: {
      posts: [],
      meta: {
        next_page: null,
        previous_page: null,
      },
    },
    fetched: false,
    fetching: false,
    error: false,
    errorMessage: ''
  }
});

const blogReducer = (state = new INITIAL_STATE(), action) => {
  let newState = Object.assign({}, state);
  
  switch (action.type) {
/* ----- CATEGORIES ----- */
    // Changes the state of the categories error flag
    case types.SET_BLOG_CATEGORIES_ERROR:
      newState.categories.error = action.payload.flag;
      return newState;

    // Changes the content of the categories error message
    case types.SET_BLOG_CATEGORIES_ERROR_MESSAGE:
      newState.categories.errorMessage = action.payload.message;
      return newState;

    // Changes the state of the categories fetched flag
    case types.SET_BLOG_CATEGORIES_FETCHED:
      newState.categories.fetched = action.payload.flag;
      return newState;

    // Changes the state of the categories fetching flag
    case types.SET_BLOG_CATEGORIES_FETCHING:
      newState.categories.fetching = action.payload.flag;
      return newState;  

    // Stores the retrieved categories
    case types.SET_BLOG_CATEGORIES:
      newState.categories.storage = action.payload.categories;
      return newState;

/* ----- CURRENT POST ----- */
    // Changes the state of the categories error flag
    case types.SET_BLOG_CURRENT_POST_ERROR:
      newState.currentPost.error = action.payload.flag;
      return newState;

    // Changes the content of the categories error message
    case types.SET_BLOG_CURRENT_POST_ERROR_MESSAGE:
      newState.currentPost.errorMessage = action.payload.message;
      return newState;

    // Changes the state of the categories fetched flag
    case types.SET_BLOG_CURRENT_POST_FETCHED:
      newState.currentPost.fetched = action.payload.flag;
      return newState;

    // Changes the state of the categories fetching flag
    case types.SET_BLOG_CURRENT_POST_FETCHING:
      newState.currentPost.fetching = action.payload.flag;
      return newState;  

    // Stores the retrieved categories
    case types.SET_BLOG_CURRENT_POST:
      newState.currentPost.post = action.payload.post;
      return newState;

/* ----- MOST RECENT ----- */
    // Changes the state of the posts error flag
    case types.SET_BLOG_MOST_RECENT_ERROR:
      newState.sidetrack.mostRecent.error = action.payload.flag;
      return newState;

    // Changes the content of the posts error message
    case types.SET_BLOG_MOST_RECENT_ERROR_MESSAGE:
      newState.sidetrack.mostRecent.errorMessage = action.payload.message;
      return newState;

    // Changes the state of the posts fetched flag
    case types.SET_BLOG_MOST_RECENT_FETCHED:
      newState.sidetrack.mostRecent.fetched = action.payload.flag;
      return newState;

    // Changes the state of the posts fetching flag
    case types.SET_BLOG_MOST_RECENT_FETCHING:
      newState.sidetrack.mostRecent.fetching = action.payload.flag;
      return newState;  

    // Stores the retrieved posts
    case types.SET_BLOG_MOST_RECENT:
      newState.sidetrack.mostRecent.post = action.payload.post;
      return newState;

/* ----- POSTS ----- */
    // Changes the state of the posts error flag
    case types.SET_BLOG_POSTS_ERROR:
      newState.posts.error = action.payload.flag;
      return newState;

    // Changes the content of the posts error message
    case types.SET_BLOG_POSTS_ERROR_MESSAGE:
      newState.posts.errorMessage = action.payload.message;
      return newState;

    // Changes the state of the posts fetched flag
    case types.SET_BLOG_POSTS_FETCHED:
      newState.posts.fetched = action.payload.flag;
      return newState;

    // Changes the state of the posts fetching flag
    case types.SET_BLOG_POSTS_FETCHING:
      newState.posts.fetching = action.payload.flag;
      return newState;  

    // Stores the retrieved posts
    case types.SET_BLOG_POSTS:
      newState.posts.storage.posts = action.payload.posts.data;
      newState.posts.storage.meta = action.payload.posts.meta;
      return newState;
      
/* ----- TAGS ----- */
    // Changes the state of the tags error flag
    case types.SET_BLOG_TAGS_ERROR:
      newState.tags.error = action.payload.flag;
      return newState;

    // Changes the content of the tags error message
    case types.SET_BLOG_TAGS_ERROR_MESSAGE:
      newState.tags.errorMessage = action.payload.message;
      return newState;

    // Changes the state of the tags fetched flag
    case types.SET_BLOG_TAGS_FETCHED:
      newState.tags.fetched = action.payload.flag;
      return newState;

    // Changes the state of the tags fetching flag
    case types.SET_BLOG_TAGS_FETCHING:
      newState.tags.fetching = action.payload.flag;
      return newState;  

    // Stores the retrieved tags
    case types.SET_BLOG_TAGS:
      newState.tags.storage = action.payload.tags;
      return newState;

/* ----- DEFAULT ----- */
    default:
      return newState;
  }

};

export default blogReducer;