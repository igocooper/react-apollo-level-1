import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Apollo stuff 
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import { ApolloProvider } from 'react-apollo';

const cache = new InMemoryCache();

persistCache({
  cache,
  storage: window.localStorage
})
  .then( () => {
    const defaultState = {
      isEditMode: false
    }

    const client = new ApolloClient({
      cache,
      uri: 'https://api-euwest.graphcms.com/v1/cjko4kc4p1hek01dls0gy08i9/master',
      clientState: {
        defaults: defaultState,
        resolvers: {}
      }
    });

    ReactDOM.render(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>, 
      document.getElementById('root')
    );
    registerServiceWorker();

});
