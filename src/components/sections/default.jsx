import React from 'react'
import { Input, InputContainer, Label, Section, Title } from '../util';


const Default = (props) => {
  return (
    <Section className='main-grid-item'>
        <div className="section-flex-item">
            <Title>
                {"<Input />"}
            </Title>
            <Label>
                Label
                <InputContainer>
                    <Input placeholder='Placeholder'/>
                </InputContainer>
            </Label>
        </div>

        <div className="section-flex-item">
            <Title className='light-title'>
                {"&:hover"}
            </Title>
            <Label>
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
            <Label className='blue-label'>
                Label
                <InputContainer>
                    <Input 
                        placeholder='Placeholder'
                        className='blue-input'
                    />
                </InputContainer>
            </Label>
        </div>
    </Section>
  )
}

export default Default;