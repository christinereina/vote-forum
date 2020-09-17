import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const getTimeInt = function(str) {
  let arr = str.split('-'),
    timeStr = [
      arr[2].substring(1),
      arr[1],
      arr[0]
    ].join('');
  return parseInt(timeStr, 16);
}

const getDate = function(str, func) {
  let intTime = getTimeInt(str) - 122192928000000000,
    intMillisec = Math.floor(intTime/10000);
  return new Date(intMillisec);
}

function PostList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.postList.map((post) =>
      <Post
      whenPostClicked = { props.onPostSelection }
      postTitle={post.postTitle}
      postAuthor={post.postAuthor}
      postStamp={getDate(post.postStamp, getTimeInt).toString()}
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