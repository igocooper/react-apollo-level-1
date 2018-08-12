import React, { Component } from 'react'

export default class PostForm extends Component {
  state = {
    title: '',
    body: ''
  };

  handleInput = e => {
    const formData = {};
    formData[e.target.name] = e.target.value;
     this.setState({...formData});
  };

  render() {
    const { createPost } = this.props;
    const { title, body } = this.state;
    return (
      <form onSubmit={ (e) => {
        e.preventDefault();
        createPost({
          variables: {
            title,
            body
          }
        })
          .then( () => {
            // reset form if mutation is successfull
            this.setState({
              title: '',
              body: ''
            });
          })
          .catch( err => console.log(err))
      }}>
        <input type="text" name="title" placeholder="title" value={title} onChange={this.handleInput}/>
        <textarea name="body" placeholder="body" id="body" value={body} onChange={this.handleInput}></textarea>
        <button>Submit</button>
      </form>
    )
  }
}
