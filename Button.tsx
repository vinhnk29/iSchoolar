import styled from 'styled-components'

export const Button = styled.button<any>`
  margin: 29px 20px 20px 0;
  border: 1px solid #ffffff;
  padding: 15px;
  background: transparent;
  font-size: 16px;
  height: 50px;
  color: #ffffff;
  flex: ${props => props.grow || 1} 0;
`
