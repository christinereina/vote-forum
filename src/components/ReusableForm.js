import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='postTitle'
          placeholder='Post Title'
          defaultValue={props.defaultPostTitle} />
        <input
          type='text'
          name='postAuthor'
          placeholder='Post Author'
          defaultValue={props.defaultPostAuthor} />
        <input
          type='text'
          name='postPeek'
          placeholder='Share a few lines about your post...'
          defaultValue={props.defaultPostPeek} />  
        <textarea
          name='postBody'
          placeholder='Enter your Post here...'
          defaultValue={props.defaultPostBody} />
        <button type='submit'>{props.buttonText}</button>    
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  defaultPostTitle: PropTypes.string,
  defaultPostAuthor: PropTypes.string,
  defaultPostPeek: PropTypes.string,
  defaultPostBody: PropTypes.string
};

export default ReusableForm;