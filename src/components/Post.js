import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPostClicked(props.postId)}>
        <h2>{props.postTitle}</h2>
        <h3>Posted by: {props.postAuthor} | {props.postStamp}</h3>
        <p>{props.postPeek}</p>
        </div>
        <button onClick= {() => props.upVote(props.postVote)}>+</button>
        <button onClick= {() => props.downVote(props.postVote)}>-</button>
        <p>Votes: {props.postVote}</p>
    </React.Fragment>
  );
}

Post.propTypes = {
  postTitle: PropTypes.string.isRequired,
  postAuthor: PropTypes.string,
  postStamp: PropTypes.string,
  postPeek: PropTypes.string,
  postVote: PropTypes.number,
  postId: PropTypes.string,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
  whenPostClicked: PropTypes.func
}

export default Post;