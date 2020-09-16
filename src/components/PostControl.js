import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
import EditPostForm from ',/EditPostForm'



class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null,
      editing: false
    };
  }

  handleClick = () => {

    if (this.state.selectedPost != null) {
      this.ssetState({
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

  handleViewingPost = (id) => {
    const newMasterList = this.state.masterList.filter(post => post.id === id)[0];
    this.setState({
      masterList: newMasterList,
      selectdPost: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingPost = (postToEdit) => {
    const newMasterList = this.state.masterList.filter(post => post.id !== this.state.selectedPost.id).concat(postToEdit);
    this.setState({
      masterList: newMasterList,
      editing: false,
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
    } else if (this.state.selectedPost != null) {
      currentlyVisibleState = <PostDetail
        post = {this.state.selectedPost}
        onClickingDelete = {this.handleDeletingPost}
        onClickingEdit = {this.handleEditClick} />;
        buttonText = "Return to Forum";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm
        onNewPostCreation = {this.handleAddingNewPost} />;
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