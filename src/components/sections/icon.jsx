import React from 'react'
import { Section, Title, Input, Label, InputContainer, Span } from '../util';
import lock from '../../icons/lock.svg'
import phone from '../../icons/phone.svg'

const Icon = () => {
  return (
      <>
      
        <div className="section-grid-item icon-one">
            <Title>
                {'<Input startIcon />'}
            </Title>
            <Label >
                Label
                <InputContainer>
                    <img className='icon' src={phone} alt="" />
                    <Input 
                        placeholder='Placeholder'
                        className='pi-45'
                    />
                </InputContainer>
            </Label>
        </div>

        <div className="section-grid-item icon-two">
            <Title >
                {'<Input endIcon />'}
            </Title>
            <Label >
                Label
                <InputContainer >
                    <img src={lock} className="icon r0" alt="" />

                    <Input 
                        placeholder='Placeholder'
                    />
                </InputContainer>
            </Label>
        </div>
      </>

       
  )
}

export default Icon;