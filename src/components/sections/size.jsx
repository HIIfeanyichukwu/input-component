import React from 'react'
import { Title, Input, Label, InputContainer } from '../util';

const Size = () => {
  return (
    <>
      
        <div className="section-grid-item size-one">
            <Title>
                {'<Input size="sm" />'}
            </Title>
            <Label >
                Label
                <InputContainer>
                    <Input 
                        placeholder='Placeholder'
                        className='sm'
                    />
                </InputContainer>

            </Label>
        </div>

        <div className="section-grid-item size-two">
            <Title>
                {'<Input size="md" />'}
            </Title>
            <Label >
                Label
                <InputContainer>
                    <Input 
                        placeholder='Placeholder'
                        className='md'
                    />
                </InputContainer>

            </Label>
        </div>

       
    </>

       
  )
}

export default Size;