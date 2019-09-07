import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import store from './redux/store'

const GRAPHCMS_API = 'https://api-euwest.graphcms.com/v1/cjtfsm7n222qb01b99hezu8j5/master'

const client = new ApolloClient({
    link: new HttpLink({ uri: GRAPHCMS_API }),
    cache: new InMemoryCache()
})

ReactDOM.render(
    <ApolloProvider client={client} store={store}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
