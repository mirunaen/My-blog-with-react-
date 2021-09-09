import { useState } from 'react';
import { Link } from 'react-router-dom'

const apiUrl = "http://localhost:3004/posts"

export default () => {

    const [isSuccess, setIsSucess] = useState(false)
    //create post

    async function createArticle(articleData) {
        const response = await fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(articleData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        setIsSucess(true)
    }

    return <div>
        <h1>Create new post</h1>
        {!isSuccess ? <form onSubmit={(event) => {
            event.preventDefault()
            const newPost = {
                title: event.target.title.value,
                description: event.target.description.value
            }
            createArticle(newPost)
        }}>
            <div>
                <label>Title:</label>
                <input name="title"></input>
            </div>
            <div>
                <label>Desciption:</label>
                <textarea name="description"></textarea>
            </div>
            <button type="submit" >Submit</button>
        </form> : <div>Post Was Created!</div>}
        <Link to="/" >Go back home</Link>
    </div>
}