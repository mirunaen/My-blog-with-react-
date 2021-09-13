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

const PostDescription = styled.p`
  text-overflow: ellipsis;  
  width: 100%;  
  max-width: 100%;
  color: #808e9b;
  font-style: italic;
  font-size: 0.8rem;
  margin-top: 0px;
  white-space: nowrap;
  overflow: hidden;
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
    <Wrapper className="App" >
      <h1>My Blog :)</h1>
      {postList.map(post => {
        return (
          <Link to={`./post/${post.id}`} key={post.id}>
            <Title data-testid={`title-${post.id}`}>{post.title}</Title>
            <PostDescription data-testid={`description-${post.id}`}>{post.description}</PostDescription>
          </Link>
        )
      })}

      <Link to="/create-post">Add a post</Link>
    </Wrapper >
  );
}

export default HomePage;
