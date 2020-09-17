export default (state = {}, action) => {
  const { postTitle, postAuthor, postBody, postId } = action;
  switch (action.type) {
    case 'ADD_POST':
      return Object.assign({}, state, {
        [postId]: {
          postTitle: postTitle,
          postAuthor: postAuthor,
          postBody: postBody,
          postId: postId
        }
      });
      default:
        return state;
    }
};