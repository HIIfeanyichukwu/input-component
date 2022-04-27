import React from 'react'
import { Section, Title, InputMultiLine, Label, InputContainer } from '../util';

const MultiLine = () => {
  return (
    <Section className='main-grid-item'>
        <div className="section-flex-item">
            <Title>
                {"<Input multiline row=\"4\" />"}
            </Title>
            <Label>
                Label
                <InputContainer>
                    <InputMultiLine placeholder='Placeholder' />
                </InputContainer>
            </Label>
        </div>
    </Section>
  )
}

export default MultiLine