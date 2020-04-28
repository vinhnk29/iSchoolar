import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { AppHeader } from './components/Header'
import { Menu } from './components/Sidebar'
import { AppWrapper, ViewWrapper } from './components/styles'
import { Home } from './views/Home'

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: #E5F0FF;
  }
`

function App() {
  return (
    <>
      <AppHeader />
      <AppWrapper>
        <Global />
        <Menu />
        <ViewWrapper>
          <Home />
        </ViewWrapper>
      </AppWrapper>
    </>
  )
}

export default App
