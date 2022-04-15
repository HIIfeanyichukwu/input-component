import React from 'react'
import { Title, Input, Label, InputContainer } from '../util';

const Text = () => {
  return (
    <>
      
        <div className="section-grid-item text">
            <Title>
                {'<Input value="text" />'}
            </Title>
            <Label >
                Label
                <InputContainer>
                    <Input 
                        placeholder='Text'
                        className='fw-m'
                    />
                </InputContainer>

            </Label>
        </div>

       
    </>

       
  )
}

export default Text;