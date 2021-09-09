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

      <Link to="/create-post">Add a post</Link>
    </div >
  );
}

export default HomePage;
