import React, { useState } from 'react'
import styled from 'styled-components'

export function Checkbox(props: any) {
  const [checked, setChecked] = useState(false)
  return (
    <Styled onClick={() => setChecked(!checked)}>
      <input type='checkbox' checked={!!checked} />
      <label>{props.label}</label>
    </Styled>
  )
}

export default Checkbox

const Styled = styled.div`
  display: inline-block;
  margin-top: 25px;
  > input {
    opacity: 0;
  }
  > input + label {
    position: relative;
    padding-left: 45px;
    padding-top: 8px;
    font-size: 18px;
    cursor: pointer;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 1px;
      width: 32px;
      height: 32px;
      border: 1px solid #ffffff;
      transition: background-color 150ms linear;
    }
  }
  > input:checked + label {
    &:before {
      background-color: #ffffff;
    }
  }
`
