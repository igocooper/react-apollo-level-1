import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// react router
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// Apollo stuff 
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// our components
import Post from './Posts/Post';
import NewPost from './Posts/NewPost';
import Posts from './Posts/Posts';

const defaultState = {
  isEditMode: false
}

const client = new ApolloClient({
  uri: 'https://api-euwest.graphcms.com/v1/cjko4kc4p1hek01dls0gy08i9/master',
  clientState: {
    defaults: defaultState,
    resolvers: {}
  }
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/">
              <h1 className="App-title">Welcome to React Apollo 🚀</h1>
            </Link>
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={Posts}/>
              <Route exact path="/post/new" component={NewPost}/>
              <Route path="/post/:id" component={Post}/>
            </Switch>
          </main>

        </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
