import React from 'react'
import styled from 'styled-components'

interface InputWrapperProps {
  grow?: number
}

export const FormControl = styled.input`
  margin: 3px 20px 20px 0;
  border: 1px solid #ffffff;
  padding: 15px;
  background: transparent;
  font-size: 16px;
  color: #ffffff;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgb(104, 133, 172);
  }
`

export const Label = styled.label`
  font-size: 23px;
`

const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  flex-direction: column;
  flex: ${props => props.grow || 1} 0;
`

const SelectFormControl = styled(FormControl)`
  border-radius: 0;
  height: 50px;
`

export const Select = (props: InputWrapperProps & { label: string; children: JSX.Element[] }) => {
  return (
    <InputWrapper {...props}>
      <Label>{props.label}</Label>
      <SelectFormControl as='select'>{props.children}</SelectFormControl>
    </InputWrapper>
  )
}

export const Input = (props: InputWrapperProps & { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <InputWrapper {...props}>
      <Label>{props.label}</Label>
      <FormControl {...props} />
    </InputWrapper>
  )
}

export const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`
