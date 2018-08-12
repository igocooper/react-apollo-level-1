import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PostForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onSuccess: PropTypes.func,
    post: PropTypes.object
  }

  static defaultProps = {
    post: {},
    onSuccess: () => null
  }

  state = {
    id: this.props.post.id || '',
    title: this.props.post.title || '',
    body: this.props.post.body || ''
  };

  handleInput = e => {
    const formData = {};
    formData[e.target.name] = e.target.value;
     this.setState({...formData});
  };

  render() {
    const { onSubmit, onSuccess } = this.props;
    const { title, body, id } = this.state;
    return (
      <form onSubmit={ (e) => {
        e.preventDefault();
        onSubmit({
          variables: {
            id,
            title,
            body
          }
        })
          .then( () => {
            // toggle isEditMode  
            onSuccess();

          })
          .catch( err => console.log(err))
      }}>
        <input type="text" name="title" placeholder="title" value={title} onChange={this.handleInput}/>
        <textarea name="body" placeholder="body" id="body" value={body} onChange={this.handleInput}></textarea>
        <button className="button">Submit</button>
      </form>
    )
  }
}
