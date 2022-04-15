import React from 'react'
import { Section, Title, Input, Label, InputContainer, Span } from '../util';

const Interesting = () => {
  return (
      <>
      
        <div className="section-grid-item inter-one">
            <Title>
                {'<Input helperText="Some interesting text" />'}
            </Title>
            <Label >
                Label
                <InputContainer>
                    <Input 
                        placeholder='Placeholder'
                    />
                </InputContainer>
                <Span>
                    Some interesting text
                </Span>
            </Label>
        </div>

        <div className="section-grid-item inter-two">
            <Title >
                {'<Input helperText="Some interesting text" error />'}
            </Title>
            <Label className='red-label'>
                Label
                <InputContainer>
                    <Input 
                        placeholder='Placeholder'
                        className='red-input'
                    />
                </InputContainer>
                <Span>Some interesting text</Span>
            </Label>
        </div>
      </>

       
  )
}

export default Interesting;