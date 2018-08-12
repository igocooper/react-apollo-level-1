import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export default class Posts extends Component {
  render() {
    return (
      <Query query={POSTS_QUERY}>
      { ({data, loading}) => {
        if (loading) return 'Loading ...'
        const { posts }  = data;
        return posts.map( post => (
          <li key={post.id} >
            <Link to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
            </Link>
          </li>  
        )
        )}
      }
    </Query>
    )
  }
}

const POSTS_QUERY = gql`
  query allPosts {
    posts {
      title
      id
      body
    }
  }
`
