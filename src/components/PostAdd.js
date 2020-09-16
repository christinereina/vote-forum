import React from 'react';
import { v1, v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";

function PostAdd(props) {

  function handlePostAddFormSubmit(event) {
    event.preventDefault();
    props.onPostAdd({
      postTitle: event.target.postTitle.value,
      postAuthor: event.target.postAuthor.value,
      postStamp: v1(),
      postPeek: event.target.postPeek.value,
      postBody: event.target.postBody.value,
      postVote: 0,
      postId: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handlePostAddFormSubmit}
        buttonText="Post" />
    </React.Fragment>
  )
}

  PostAdd.propTypes = {
    onPostAdd: PropTypes.func
  };

export default PostAdd;