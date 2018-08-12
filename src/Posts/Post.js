import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import UpdatePost from './UpdatePost';
import EditMode from './EditMode';


export default class Post extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <Query query={POST_QUERY} variables={{id}}>
        { ( {data, loading} ) => {
          if (loading) return  (<p>'Loading...'</p>)
          const { post, isEditMode } = data;

          return (
            <div>
              <EditMode isEditMode={isEditMode} />
              {isEditMode ? (
                <section>
                  <h1>Edit Post</h1>
                  <UpdatePost post={post}/>
                </section>
              ) : (
                <section>
                  <h1>{post.title}</h1>
                </section>
              )} 
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
    isEditMode @client
  }
`;
