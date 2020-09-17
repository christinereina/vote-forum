
import postListReducer from '../../reducers/post-list-reducer';

describe('postListReducer', () => {

  let action;
  const postData = {
    postTitle: "Redux rox!",
    postAuthor: "User2000",
    postBody: "i love programmming",
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new post data to masterPostlist', () => {
    const { postTitle, postAuthor, postBody, id } = postData;
    action = {
      type: 'ADD_TICKET',
      postTitle: postTitle,
      postAuthor: postAuthor,
      postBody: postBody,
      id: id
  };

  expect(postListReducer({}, action)).toEqual({
    [id] : {
      postTitle: postTitle,
      postAuthor: postAuthor,
      postBody: postBody,
      id: id
    }
  });
});
});