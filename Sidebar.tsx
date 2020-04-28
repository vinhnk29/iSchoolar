import React from 'react'
import styled from 'styled-components'

const MenuList = styled.div`
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  width: 205px;
`

const MenuItem = styled.div`
  font-size: 21.25px;
  padding: 70px;
  cursor: pointer;
  color: #000;
  &:hover,
  &.active {
    color: #ffffff;
    background-color: rgb(26, 69, 125);
  }
`

export function Menu() {
  return (
    <MenuList>
      <MenuItem className='active'>
        <img src={require('./img/home.png')} width='61' height='61' />
        Home
      </MenuItem>
      <MenuItem>
        <img src={require('./img/setting.png')} width='61' height='61' />
        Setting
      </MenuItem>
    </MenuList>
  )
}
