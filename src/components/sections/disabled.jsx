import React from 'react'
import { Section, Title, InputDisabled, Label, InputContainer } from '../util';

const Disabled = () => {
  return (
    <Section className='main-grid-item'>
        <div className="section-flex-item">
            <Title>
                {"<Input disabled />"}
            </Title>
            <Label>
                Label
                <InputContainer>
                    <InputDisabled placeholder='Placeholder' disabled/>
                </InputContainer>
            </Label>
        </div>
    </Section>
  )
}

export default Disabled