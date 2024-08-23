import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import queryString from 'query-string';

const Posts = () => {

  const { year, month } = useParams();
  const location = useLocation();
  // Parsing query string
  const queryParams = queryString.parse(location.search);

    return (
      <div className="container"> 
         <h1>Posts</h1>
         Year:{year} , Month: {month} 
      </div>
    );
  }
  
  export default Posts;