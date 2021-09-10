import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";


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
            <ContainerDescription>
                <label>Title:</label>
                <Input name="title"></Input>
            </ContainerDescription>
            <ContainerDescription>
                <label>Desciption:</label>
                <TextArea name="description"></TextArea>
            </ContainerDescription>
            <StyledButton type="submit" >Submit</StyledButton>
        </form> : <div>Post Was Created!</div>}
        <Link to="/" >Go back home</Link>
    </Wrapper>
}

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
  font-size: 1em;
  color: tomato;
  border:2px solid tomato;
  border-radius:5px;
  margin:1em;
  padding:0.21em 1em;
  
`;

const TextArea = styled.textarea`
padding: 0.5em;
margin: 0.5em;
color: palevioletred;
background: #DB8370;
transition: background-color 1s linear;
border: none;
border-radius: 3px;
`

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: #A0E7E5;
  border: none;
  border-radius: 3px;
`;

const ContainerDescription = styled.div`
    display:flex;
`