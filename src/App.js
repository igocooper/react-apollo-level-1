import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Apollo stuff 
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: 'https://api-euwest.graphcms.com/v1/cjko4kc4p1hek01dls0gy08i9/master'
});

const POSTS_QUERY = gql`
  {
    posts {
      title
      id
      body
    }
  }
`

// client.query({
//   query: testQuery
// }).then(res => console.log(res));

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Query query={POSTS_QUERY}>
          { ({data, loading}) => {
            if (loading) return 'Loading ...'
            const { posts }  = data;
            return posts.map( post => <h1 key={post.id}>{post.title}</h1> ) 
          }}
        </Query>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
