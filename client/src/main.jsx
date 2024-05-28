import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './AppRouter'


const main = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default main