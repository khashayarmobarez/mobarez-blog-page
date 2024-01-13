import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/fonts.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// hygraph and materialUI are used in this project 
// first step: installed graphql and @apollo/client 
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@mui/material';
import theme from './mui/theme';

const client = new ApolloClient({
  uri: process.env.REACT_APP_HYGRAPH_URI,   
  cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);