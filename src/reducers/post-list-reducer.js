export default (state = {}, action) => {
  const { postTitle, postAuthor, postBody, postPeek, postVote, postStamp, postId } = action;
  switch (action.type) {
  case 'ADD_POST':
    return Object.assign({}, state, {
      [postId]: {
        postTitle: postTitle,
        postAuthor: postAuthor,
        postBody: postBody,
        postPeek: postPeek,
        postVote: postVote,
        postStamp: postStamp,
        postId: postId
      }
    });
  case 'DELETE_POST':
    const newState = { ...state };
    delete newState[postId];
    return newState;
  default:
    return state;
    }
};