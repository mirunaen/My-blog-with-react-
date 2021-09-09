import { useState, useEffect } from 'react';
import {
  Link
} from "react-router-dom";

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

  //create post

  async function createArticle(articleData) {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(articleData),
      headers: {
        "Content-Type": "application/json"
      }
    })


    //refetch and refresh the UI
    getPostList();
  }

  //we need to fetch post list when user comes to page for that we use useEffect
  useEffect(() => {
    getPostList() //when the user comes to the page it will call this function
  }, []) //only in component did mount

  return (
    < div className="App" >
      {postList.map(post => {
        return <Link to={`./post/${post.id}`}>
          <p>{post.title}</p>
        </Link>
      })}
      <input value={newPostTitle} onChange={(event) => { setnewPostTitle(event.target.value) }}></input>
      <button onClick={() => {
        createArticle({
          "title": newPostTitle,
          "author": "user"
        })
        setnewPostTitle("")
      }}>Create fake post</button>
      <Link to="/create-post">Add a post</Link>
    </div >
  );
}

export default HomePage;
