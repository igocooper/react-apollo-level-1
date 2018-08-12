import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PostForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    post: PropTypes.object
  }

  static defaultProps = {
    post: {}
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
    const { onSubmit } = this.props;
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
        <button className="button">Submit</button>
      </form>
    )
  }
}
