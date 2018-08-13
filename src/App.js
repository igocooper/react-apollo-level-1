import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// react router
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// our components
import Post from './Posts/Post';
import NewPost from './Posts/NewPost';
import Posts from './Posts/Posts';



class App extends Component {
  render() {
    return (
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

    );
  }
}

export default App;
