import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


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
        <div>
            <h1>{postData && postData.title}</h1>
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
        </div>
    )
}


