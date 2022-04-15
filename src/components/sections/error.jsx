import React from 'react'
import { Section, Title, Input, Label, InputContainer } from '../util';

const Error = () => {
  return (
    <Section className='main-grid-item'>
        <div className="section-flex-item">
            <Title>
                {"<Input error />"}
            </Title>
            <Label className="red-label">
                Label
                <InputContainer>
                    <Input 
                        placeholder='Placeholder'
                        className="red-input"
                    />
                </InputContainer>
            </Label>
        </div>

        <div className="section-flex-item">
            <Title className='light-title'>
                {"&:hover"}
            </Title>
            <Label >
                Label
                <InputContainer>
                    <Input 
                        placeholder='Placeholder'
                        className='gray-input'
                    />
                </InputContainer>
            </Label>
        </div>

        <div className="section-flex-item">
            <Title className='light-title'>
                {"&:focus"}
            </Title>
            <Label className='red-label'>
                Label
                <InputContainer>
                    <Input 
                        placeholder='Placeholder'
                        className='red-input'
                    />
                </InputContainer>
            </Label>
        </div>
    </Section>
  )
}

export default Error;