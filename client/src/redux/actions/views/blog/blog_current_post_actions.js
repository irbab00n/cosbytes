import * as types from '../../../types';
import butter from '../../../../config/buttercms';

/* SET BLOG CURRENT POST FETCHING ACTION */
const setBlogCurrentPostFetchingAction = (flag) => ({
  type: types.SET_BLOG_CURRENT_POST_FETCHING,
  payload: {
    flag
  }
});

/* SET BLOG CURRENT POST FETCHED ACTION */
const setBlogCurrentPostFetchedAction = (flag) => ({
  type: types.SET_BLOG_CURRENT_POST_FETCHED,
  payload: {
    flag
  }
});

/* SET BLOG CURRENT POST ACTION */
const setBlogCurrentPostAction = (post) => ({
  type: types.SET_BLOG_CURRENT_POST,
  payload: {
    post
  }
});


/* SET BLOG CURRENT POST ERROR ACTION CREATOR */
export const setBlogCurrentPostError = (flag) => {
  return dispatch => dispatch(setBlogCurrentPostErrorAction(flag));
};
/* SET BLOG CURRENT POST ERROR ACTION */
const setBlogCurrentPostErrorAction = (flag) => ({
  type: types.SET_BLOG_CURRENT_POST_ERROR,
  payload: {
    flag
  }
});

/* SET BLOG CURRENT POST ERROR MESSAGE ACTION */
const setBlogCurrentPostErrorMessageAction = (message) => ({
  type: types.SET_BLOG_CURRENT_POST_ERROR_MESSAGE,
  payload: {
    message
  }
});


export const retrieveBlogPostFromSlug = (slug) => {
  return dispatch => {
    // console.log('fetch blog post: ', slug);
    // Set fetching state true, fetched state false
    dispatch(setBlogCurrentPostFetchingAction(true));
    dispatch(setBlogCurrentPostFetchedAction(false));
    // Turn off any error messages
    dispatch(setBlogCurrentPostErrorAction(false));
    dispatch(setBlogCurrentPostErrorMessageAction(''));
    // Get the post using the slug
    butter.post.retrieve(slug)
      .then(response => {
        // console.log('response: ', response);
        // Set fetching state false, fetched state true        
        dispatch(setBlogCurrentPostFetchingAction(false));
        dispatch(setBlogCurrentPostFetchedAction(true));
        // Set the retrieved Post in state
        dispatch(setBlogCurrentPostAction(response.data));
      })
      .catch(error => {
        console.log(`something went wrong while fetching blog post: ${slug} -- `, error);
        dispatch(setBlogCurrentPostErrorAction(true));
        dispatch(setBlogCurrentPostErrorMessageAction(error));
      });
  };
};