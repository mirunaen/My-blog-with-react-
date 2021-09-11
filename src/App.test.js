// __tests__/fetch.test.js
import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom'
import HomePage from './components/HomePage'
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";

//mock for the server to get a post 
//when the request will run
const server = setupServer(
  rest.get('http://localhost:3004/posts', (req, res, ctx) => {
    return res(ctx.json([{
      //instead of going to the backend we will run this 
      "title": "A default Title",
      "description": "Some description",
      "id": 3
    }]))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads and displays greeting', async () => {
  render(<Router><HomePage /></Router>)

  await waitFor(() => screen.getByTestId('title-3'))

  expect(screen.getByTestId('title-3')).toHaveTextContent('A default Title')
})

