import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export default class Post extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <Query query={POST_QUERY} variables={{id}}>
        { ( {data, loading} ) => {
          if (loading) return  (<p>'Loading...'</p>)
          const { post } = data;

          return (
            <div>
              <h2>{post.title}</h2>
              <p>{post.body}</p> 
            </div> 
          )
        }
        }
      </Query>
    )
  }
}

const POST_QUERY = gql`
  query getPost($id: ID!) {
    post( where: {id: $id}) {
      id
      title
      body
    }
  }
`;
