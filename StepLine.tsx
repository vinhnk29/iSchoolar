import React from 'react'
import styled from 'styled-components'

const Dot = styled.div<{ active: boolean }>`
  height: 6px;
  margin: 0 20px;
  width: 40px;
  margin-top: 20px;
  border-radius: 4px;
  background-color: ${props => (props.active ? '#fff' : 'rgba(255, 255, 255, 0.3)')};
`

export function StepsLine(props: { steps: { active: boolean }[] }): JSX.Element {
  return (
    <div style={{ display: 'flex', flex: '2 0' }}>
      {props.steps.map(v => (
        <Dot active={v.active} />
      ))}
    </div>
  )
}
