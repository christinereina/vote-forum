import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPostClicked(props.Id)}>
        <img href="/">USER_ICON</img>
        <h2>{props.postTitle}</h2>
        <h3>{props.postAuthor} - {post.postStamp}</h3>
        <p>{props.postPeek}</p>
        <button onClick= {() => props.whenUpVoted(props.postVote)}>+</button>
        <button onClick= {() => props.whenDownVoted(props.postVote)}>-</button>
      </div>
    </React.Fragment>   
  );
}

Post.propTypes = {
  postTitle: PropTypes.string,
  postAuthor: PropTypes.string,
  postStamp: PropTypes.instanceOf(Date),
  postPeek: PropTypes.string,
  postVote: PropTypes.number
}

export default Post;