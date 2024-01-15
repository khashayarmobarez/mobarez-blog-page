import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout'; 
import HomePage from './Home/HomePage';
import BlogPage from './components/Blog/BlogPage';
import AuthorPage from './components/Author/AuthorPage';

// first step: installed graphql and @apollo/client 

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/Blogs/:urlSlug' element={<BlogPage/>} />
        <Route path='/Authors/:slug' element={<AuthorPage/>} />
        <Route path='/*' element={<HomePage/>} />
      </Routes>
    </Layout>
  );
}

export default App;
