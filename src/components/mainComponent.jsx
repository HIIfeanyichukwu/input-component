import React from 'react'
import { Main } from './util';
import Default from './sections/default';
import Error from './sections/error';
import Disabled from './sections/disabled';
import Grid from './sections/gridSection';
const MainComponent = () => {
  return (
    <Main>
        <Default />
        <Error />
        <Disabled />
        <Grid />
    </Main>
  )
}

export default MainComponent;