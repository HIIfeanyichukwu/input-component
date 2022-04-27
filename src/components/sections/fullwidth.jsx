import React from 'react'
import { Input, InputContainer, Label, Section, Title } from '../util';


const FullWidth = (props) => {
  return (
    <Section className='fullwidth-container main-grid-item' >
       

        <div className="section-flex-item">
            <Title >
                {"<Input fullWidth />"}
            </Title>
            <Label>
                Label
                <InputContainer className='fw-container'>
                    <Input 
                        defaultValue={"Text"}
                    />
                </InputContainer>
            </Label>
        </div>

    </Section>
  )
}

export default FullWidth;