import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export default class Posts extends Component {
  render() {
    return (
      <Fragment>
        <Link className="button" to="/post/new"> New Post</Link>
        <ul className="posts-listings">
          <Query query={POSTS_QUERY}>
            { ({data, loading}) => {
              if (loading) return 'Loading ...'
              const { posts }  = data;
              return posts.map( post => (
                <li key={post.id} >
                  <Link to={`/post/${post.id}`}>{post.title}</Link>
                </li>  
              )
              )}
            }
          </Query>
        </ul>
      </Fragment>
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
