import React, { Component } from 'react'
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import PostForm from './PostForm';

export default class NewPost extends Component {

  render() {
    return (
      <Mutation mutation={NEW_POST}>
        { (createPost) => (
          <div>
            <h2>New Post</h2>
            <PostForm onSubmit={createPost}/>
          </div>
        )
        }
      </Mutation>   
    )
  }
}

const NEW_POST = gql`
  mutation createPost($title: String!, $body: String!) {
    createPost(data: {
      status: PUBLISHED
      title: $title
      body: $body
    }) {
      id
      title
      body
    }
}
`;
