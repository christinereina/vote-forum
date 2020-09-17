import React from 'react';
import PropTypes from 'prop-types';

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

function PostDetail(props) {
  const { post, onClickingEdit, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>{post.postTitle}</h1>
      <h5>Posted by {post.postAuthor} | {getDate(post.postStamp, getTimeInt).toString()}</h5>
      <h3>{post.postPeek}</h3>
      <p>{post.postVote}<br />
      {post.postBody}</p>
      <button onClick={ props.onClickingEdit }>Update Post</button>
      <button onClick={()=> onClickingDelete(post.postId) }>Delete Post</button>
      <hr/>
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}
export default PostDetail;