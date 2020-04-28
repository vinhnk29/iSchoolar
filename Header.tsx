import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: white;
  z-index: 3;
`
const HeaderImg = styled.img`
  width: 80px;
  max-height: 80px;
  margin-left: 10px;
`
const Navbar = styled.nav``
const Flexbar = styled.ul`
  display: flex;
  flex-direction: row;
  margin-left: 0;
  padding-left: 0;
  left: 0;
  right: 0;
  list-style-type: none;
  > li a {
    padding: 20px;
  }
`
const Link = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    border-bottom: 8px solid black;
  }
`

export function AppHeader() {
  return (
    <Header>
      <HeaderImg style={{ maxWidth: '100%' }} src='https://i.pinimg.com/474x/cc/88/2a/cc882ac809d14a4f1888b61f06f7dc68.jpg' />
      <Navbar>
        <Flexbar>
          <li>
            <Link href='#'>Home</Link>
          </li>
          <li>
            <Link href='#'>Searching</Link>
          </li>
          <li>
            <Link href='#'>Generate</Link>
          </li>
          <li>
            <Link href='#'>About Us</Link>
          </li>
        </Flexbar>
      </Navbar>
    </Header>
  )
}
