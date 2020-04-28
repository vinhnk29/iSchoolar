import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button'
import Checkbox from '../components/Checkbox'
import { Input, InputRow as Row, Select } from '../components/inputs'
import { StepsLine } from '../components/StepLine'
import { AddButton, GenerateButton, Splitter, Title } from '../components/styles'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
`

const useKeyPress = function(targetKey: string) {
  const [keyPressed, setKeyPressed] = useState(false)

  function downHandler({ key }: KeyboardEvent) {
    if (key === targetKey) {
      setKeyPressed(true)
    }
  }

  const upHandler = ({ key }: KeyboardEvent) => {
    if (key === targetKey) {
      setKeyPressed(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)

    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  })

  return keyPressed
}

export function Home() {
  const [step, setStep] = React.useState(0)
  const leftPress = useKeyPress('ArrowLeft')
  const rightPress = useKeyPress('ArrowRight')
  const nextStep = () => setStep(step >= 2 ? 0 : step + 1)
  const prevStep = () => setStep(step <= 0 ? 2 : step - 1)

  useEffect(() => {
    if (rightPress) {
      nextStep()
    }
  }, [rightPress])
  useEffect(() => {
    if (leftPress) {
      prevStep()
    }
  }, [leftPress])

  const stepsAsView = {
    0: () => (
      <>
        <Title>Basic Information</Title>
        <Row>
          <Select label='Doc type' grow={2.7}>
            <option>Research Report</option>
            <option>Research Paper</option>
          </Select>
          <Button grow={1}>Template</Button>
          <Splitter />
          <Input label='Authors' placeholder='Katherine langford' grow={3} />
          <AddButton />
        </Row>
        <Row>
          <Input label='Organization' grow={4} />
          <Splitter />
          <Input label='Emails' grow={3} />
          <AddButton />
        </Row>
        <Row>
          <Input label='Type' grow={4} />
          <Splitter />
          <Input label='Locations' grow={4} />
        </Row>
        <Row>
          <Input label='Title' grow={4} />
          <Splitter />
          <Input label='Year' grow={1} style={{ width: '70px' }} />
          <div style={{ flex: '3 0' }}></div>
        </Row>
      </>
    ),
    1: () => (
      <>
        <Title>Research</Title>
        <Row>
          <Input label='Keywords' grow={3} />
          <AddButton />
          <Splitter />
          <Input label='Research question' grow={3} />
          <AddButton />
        </Row>
        <Row>
          <Input label='Research Topics' grow={3} />
          <AddButton />
          <Splitter />
          <Input label='Proposed Methods' grow={3} />
          <AddButton />
        </Row>
        <Row>
          <Input label='Literature Reviews' grow={3} />
          <AddButton />
          <Splitter />
          <Input label='Studies' grow={3} />
          <AddButton />
        </Row>
        <Row>
          <Input label='Knowledge Gaps' grow={3} />
          <AddButton />
          <Splitter />
          <Input label='Finding' grow={3} />
          <AddButton />
        </Row>
        <Row>
          <Input label='Problems' grow={3} />
          <AddButton />
          <Splitter />
          <Input label='Limits' grow={3} />
          <AddButton />
        </Row>
      </>
    ),
    2: () => (
      <>
        <Title>Creation</Title>
        <Row style={{ padding: 80 }}>
          <div style={{ display: 'flex', flexDirection: 'column', flex: '3 0' }}>
            <Checkbox label='Vietnames' />
            <Checkbox label='English' />
          </div>
          <div style={{ flex: '2 0', fontSize: 19, margin: 50 }}>
            Sample Sentences
            <img src={require('../components/img/gachduoi.png')} width={20} height={2} style={{ marginLeft: 7 }} />
            <img src={require('../components/img/arrow-down.png')} width={24} height={10} style={{ marginLeft: 7 }} />
          </div>
        </Row>
      </>
    ),
  }

  return (
    <HomeContainer>
      {(stepsAsView as any)[step]()}
      <Row style={{ position: 'relative', marginTop: 50 }}>
        <StepsLine
          steps={[{ active: true }, { active: false }, { active: false }].map((v, index) => {
            v.active = step === index
            return v
          })}
        />
        <div style={{ flex: '1 0', display: 'flex', flexDirection: 'row' }}>
          {step > 0 && <img src={require('../components/img/prev-step.png')} width='64' height='64' onClick={() => prevStep()} />}
          {step < 2 && <img src={require('../components/img/next-step.png')} width='64' height='64' onClick={() => nextStep()} />}
          {step === 2 && <GenerateButton children='Generate' />}
        </div>
      </Row>
    </HomeContainer>
  )
}
