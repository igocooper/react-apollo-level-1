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
            { ({data, loading, fetchMore}) => {
              if (loading) return 'Loading ...'
              const { posts }  = data;
              return (
                <Fragment>
                  {posts.map( post => (
                    <li key={post.id} >
                      <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </li>  
                  ))}
                  <li>
                    <button className="button" onClick={ () => {
                      fetchMore({
                        variables: {
                          skip: posts.length 
                        },
                        updateQuery: (prev, { fetchMoreResult }) => {
                          if (!fetchMoreResult) return prev
                          return Object.assign({}, prev, {
                            posts: [...prev.posts, ...fetchMoreResult.posts]
                          });
                        }
                      })
                    }}>
                      Load More
                    </button>
                  </li>
                </Fragment>
              )
            }
            }
          </Query>
        </ul>
      </Fragment>
    )
  }
}

const POSTS_QUERY = gql`
  query allPosts($skip: Int) {
    posts(orderBy: createdAt_DESC, first: 3, skip: $skip) {
      title
      id
      body
    }
  }
`
