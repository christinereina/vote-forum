import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function PostList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.postList.map((post) =>
      <Post
      whenPostClicked = { props.onPostSelection }
      postTitle={post.postTitle}
      postAuthor={post.postAuthor}
      postStamp={post.postStamp}
      postPeek={post.postPeek}
      postVote={post.postVote}
      postBody={post.postBody}
      postId={post.postId}
      key={post.postId}/>
    )}
    </React.Fragment>
    );
  }
  
  PostList.propTypes = {
    postlist: PropTypes.array,
    onPostSelection: PropTypes.func
  };
  
  export default PostList;