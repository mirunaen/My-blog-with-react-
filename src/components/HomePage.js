import { useState, useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  background: #A0E7E5;
  text-align:center;
  font-size: 1.5em;
  max-width: 1024px;
  padding: 0 20px;
  margin: 0 auto;
`;

// REST api
const apiUrl = "http://localhost:3004/posts"
function HomePage() {
  const [postList, setPostList] = useState([{ title: "post" }]);
  const [newPostTitle, setnewPostTitle] = useState("")

  //in the scope of the component

  async function getPostList() {
    const response = await fetch(apiUrl)
    const data = await response.json()
    setPostList(data)
  }



  //we need to fetch post list when user comes to page for that we use useEffect
  useEffect(() => {
    getPostList() //when the user comes to the page it will call this function
  }, []) //only in component did mount

  return (
    < Wrapper className="App" >
      <h1>My Blog :)</h1>
      {postList.map(post => {
        return <Link to={`./post/${post.id}`}>
          <Title>{post.title}</Title>
        </Link>
      })}

      <Link to="/create-post">Add a post</Link>
    </Wrapper >
  );
}

export default HomePage;
