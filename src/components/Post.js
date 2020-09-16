import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPostClicked(props.Id)}>
        <h2>{props.postTitle}</h2>
        <h3>{props.postAuthor} - {props.postStamp}</h3>
        <p>{props.postPeek}</p>
        <button onClick= {() => props.whenUpVoted(props.postVote)}>+</button>
        <button onClick= {() => props.whenDownVoted(props.postVote)}>-</button>
      </div>
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
  whenUpVoted: PropTypes.func,
  whenDownVoted: PropTypes.func,
  whenPostClicked: PropTypes.func
}

export default Post;