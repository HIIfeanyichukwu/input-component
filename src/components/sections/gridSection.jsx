import React from 'react'
import Icon from './icon';
import Interesting from './interesting';
import Text from './text';
import { Section } from '../util';
import Size from './size';

const Grid = () => {
  return (
    <Section className='main-grid-item'>
        <Section className='grid'>
            <Interesting/>
            <Icon />
            <Text />
            <Size />
        </Section>
    </Section>
  )
}

export default Grid;