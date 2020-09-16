import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditPostForm(props) {
  const { post, onEditPost } = props;

  function handleEditingPost(event) {
    onEditPost({
      postTitle: event.target.postTitle.value,
      postAuthor: event.target.postAuthor.value,
      postPeek: event.target.postPeek.value,
      postBody: event.target.postBody.value,
      postId: post.postId,
      postStamp: post.postStamp
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditingPost}
        buttonText='Update Post'
        defaultPostTitle={post.postTitle}
        defaultPostAuthor={post.postAuthor}
        defaultPostPeek={post.postPeek}
        defaultPostBody={post.postBody} />
    </React.Fragment>
  );
}

EditPostForm.propTypes = {
  // post: PropTypes.object,
  onEditPost: PropTypes.func
};

export default EditPostForm;