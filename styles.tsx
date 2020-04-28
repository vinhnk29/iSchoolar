import styled from 'styled-components'

export const AppWrapper = styled.div`
  font-size: 13px;
  display: flex;
  flex-direction: row;
`

export const ViewWrapper = styled.div`
  padding: 40px;
  background-color: rgb(26, 69, 125);
  width: 100%;
  height: 100vh;
`

export const Title = styled.h1`
  font-size: 54px;
`

export const Splitter = styled.div`
  flex: 0.3 0;
`

export const AddButton = styled.div`
  flex: 1 0;
  position: relative;
  &::before {
    content: ' ';
    height: 32px;
    width: 32px;
    background: url(${() => require('./img/add.png')});
    background-size: 32px 32px;
    background-repeat: no-repeat;
    position: absolute;
    top: 2.8em;
    right: 8em;
  }
`

export const GenerateButton = styled.button`
  background: linear-gradient(103.28deg, #299993 11.68%, #37cc7a 89.91%);
  box-shadow: 0px 0px 30px rgba(72, 236, 146, 0.45);
  border-radius: 40px;
  width: 148px;
  height: 48px;
  padding: 10px;
  font-size: 17px;
  color: #fff;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`
