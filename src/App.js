import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Apollo stuff 
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';


// our components
import Post from './Posts/Post';
import Posts from './Posts/Posts';

const client = new ApolloClient({
  uri: 'https://api-euwest.graphcms.com/v1/cjko4kc4p1hek01dls0gy08i9/master'
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Switch>
            <Route exact path="/" component={Posts}/>
            <Route path="/post/:id" component={Post}/>
          </Switch>

        </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
