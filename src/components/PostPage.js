import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";



const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  background: #B4F8C8;
  text-align:center;
  font-size: 1.5em;
  width: 100%;
  height: 100%;
  max-width: 1024px;
  padding: 0 20px;
  margin: 0 auto;
`;

const apiUrl = "http://localhost:3004/posts"


export default () => {
    const { postId } = useParams();
    const [postData, setpostData] = useState(null);
    const [listComments, setListComments] = useState([]);
    const [commentText, setCommentText] = useState("")

    //in the scope of the component 
    async function fetchSinglePost() {
        const response = await fetch(`${apiUrl}/${postId}`)
        const data = await response.json()

        const responseComments = await fetch(`${apiUrl}/${postId}/comments`)
        const dataComments = await responseComments.json()


        setpostData(data)
        setListComments(dataComments)

    }

    async function createComment(commentTextInput) {
        const responseComment = await fetch("http://localhost:3004/comments", {
            method: "POST",
            body: JSON.stringify({
                "body": commentTextInput,
                "postId": postId,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        fetchSinglePost()
    }

    useEffect(() => {
        fetchSinglePost();
    }, []);

    return (
        <Wrapper>
            <Title>{postData && postData.title}</Title>
            <p>{postData && postData.description}</p>
            <h2>Comments:</h2>
            <div>
                {listComments.map((comm) => {
                    return <p>{comm.body}</p>;
                })}
            </div>
            <div>
                <textarea value={commentText} onChange={(e) => {
                    setCommentText(e.target.value)
                }}></textarea>
                <button onClick={() => {
                    createComment(commentText);
                    setCommentText("") //clean the comment area values 
                }}> Comment</button>
            </div>

            <Link to='/'>Go back home</Link>
        </Wrapper>
    )
}


