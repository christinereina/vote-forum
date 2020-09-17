
import postListReducer from '../../reducers/post-list-reducer';

describe('postListReducer', () => {

  let action;
  const postData = {
    postTitle: "Redux rox!",
    postAuthor: "User2000",
    postBody: "i love programmming",
    postId: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new post data to masterlist', () => {
    const { postTitle, postAuthor, postBody, postId } = postData;
    action = {
      type: 'ADD_POST',
      postTitle: postTitle,
      postAuthor: postAuthor,
      postBody: postBody,
      postId: postId
  };

  expect(postListReducer({}, action)).toEqual({
    [postId] : {
      postTitle: postTitle,
      postAuthor: postAuthor,
      postBody: postBody,
      postId: postId
    }
  });
});
});