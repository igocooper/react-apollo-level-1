import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Apollo stuff 
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: 'https://api-euwest.graphcms.com/v1/cjko4kc4p1hek01dls0gy08i9/master'
});

const testQuery = gql`
  {
    posts {
      title
      id
      body
    }
  }
`

client.query({
  query: testQuery
}).then(res => console.log(res));

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
