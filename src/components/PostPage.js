import {
    Link,
    useParams
} from "react-router-dom";
import { useEffect, useState } from 'react';

const apiUrl = "http://localhost:3004/posts"
export default () => {
    const { postId } = useParams()
    const [postData, setpostData] = useState(null)

    //in the scope of the component 
    async function fetchSinglePost() {
        const response = await fetch(`${apiUrl}/${postId}`)
        const data = await response.json()
        setpostData(data)
    }

    useEffect(() => {
        fetchSinglePost()
    })
    return (
        <div>
            <h2>{postData && postData.title}</h2>
            <p>{postData && postData.description}</p>
            <Link to='/'>Go back home</Link>
        </div>
    )
}


