import React from 'react';
import PostAdd from './PostAdd';
import PostList from './PostList';
import PostDetail from './PostDetail';
import EditPostForm from './EditPostForm'

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterList: [],
      selectedPost: null,
      editing: false
    };
  }

  handleClick = () => {

    if (this.state.selectedPost != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null,
        editing: false
      });
    } else {
      this.setState(prevState=> ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewPost = (newPost) => {
    const newMasterList = this.state.masterList.concat(newPost);
    this.setState({
      masterList: newMasterList,
      formVisibleOnPage: false
    });
  }

  handleViewingPost = (postId) => {
    const selectedPost = this.state.masterList.filter(post => post.postId === postId)[0];
    this.setState({
      selectedPost: selectedPost
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingPost = (postToEdit) => {
    const editedMasterList = this.state.masterList.map(posts => {
      if (postToEdit.postId === posts.postId) {
        return postToEdit;
      } else {
        return posts;
      }
    });
    this.setState({
      masterList: editedMasterList,
      currentPost: 'PostList',
      selectedPost: postToEdit
    });
  }

  handleDeletingPost = (postId) => {
    const newMasterList = this.state.masterList.filter(post => post.postId !== postId);
    this.setState({
      masterList: newMasterList,
      selectedPost: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditPostForm
        post = {this.state.selectedPost}
        onEditPost = {this.handleEditingPost} />;
        buttonText = "Return to Forum";
    } else if (this.state.selectedPost !== null) {
      currentlyVisibleState = <PostDetail
        post = {this.state.selectedPost}
        onClickingDelete = {this.handleDeletingPost}
        onClickingEdit = {this.handleEditClick} />;
        buttonText = "Return to Forum";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <PostAdd
        onPostAdd = {this.handleAddingNewPost} />;
        buttonText = "Return to Forum";
    } else {
      currentlyVisibleState = <PostList
        postList={this.state.masterList}
        onPostSelection={this.handleViewingPost} />;
        buttonText = "Add Post";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default PostControl;