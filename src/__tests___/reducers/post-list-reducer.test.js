import postListReducer from '../../reducers/post-list-reducer';

describe('postListReducer', () => {

  let action;  
  const currentState = {
    1: {postTitle: "Redux rox!",
    postAuthor: "User2000",
    postBody: "i love programmming",
    postStamp: "9-10-2005",
    PostPeek: "kjsdlkfj",
    PostVote: 0,
    postId: 1},
    2: {postTitle: "Redux is rough!",
    postAuthor: "User2002",
    postBody: "i hate programmming",
    postStamp: "9-10-2003",
    PostPeek: "kjsdddddlkfj",
    PostVote: 0,
    postId: 2}
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new post data to masterlist', () => {
    const { postTitle, postAuthor, postBody, postStamp, postVote, postPeek, postId } = currentState;
    action = {
      type: 'ADD_POST',
      postTitle: postTitle,
      postAuthor: postAuthor,
      postBody: postBody,
      postStamp: postStamp,
      postPeek: postPeek,
      postVote: postVote,
      postId: postId
    };
    expect(postListReducer({}, action)).toEqual({
      [postId] : {
        postTitle: postTitle,
        postAuthor: postAuthor,
        postBody: postBody,
        postStamp: postStamp,
        postPeek: postPeek,
        postVote: postVote,
        postId: postId
      }
    });
  });

  test('Should delete a post', () => {
  action = {
    type: 'DELETE_POST',
    postId: 1
  };
    expect(postListReducer(currentState, action)).toEqual({
      2: {postTitle: "Redux is rough!",
      postAuthor: "User2002",
      postBody: "i hate programmming",
      postStamp: "9-10-2003",
      PostPeek: "kjsdddddlkfj",
      PostVote: 0,
      postId: 2 }
    });
  });

});