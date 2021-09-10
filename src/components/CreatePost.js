import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";


const apiUrl = "http://localhost:3004/posts"

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  background: #A0E7E5;
  text-align:center;
  font-size: 1.5em;
  max-width: 1024px;
  padding: 0 20px;
  margin: 0 auto;
`;

const StyledButton = styled.button`
  background-color: palevioletred;
  font-size: 1em;
  color: white;
  border:2px solid palevioletred;
  border-radius:3px;
  margin:1em;
  padding:0.21em 1em;
  
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: #A0E7E5;
  border: none;
  border-radius: 3px;
`;

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

    return <Wrapper>
        <Title>Create new post</Title>

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
                <Input name="title"></Input>
            </div>
            <div>
                <label>Desciption:</label>
                <Input name="description"></Input>
            </div>
            <StyledButton type="submit" >Submit</StyledButton>
        </form> : <div>Post Was Created!</div>}
        <Link to="/" >Go back home</Link>
    </Wrapper>
}