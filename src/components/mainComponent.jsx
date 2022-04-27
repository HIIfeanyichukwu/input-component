import React from 'react'
import { Main } from './util';
import Default from './sections/default';
import Error from './sections/error';
import Disabled from './sections/disabled';
import Grid from './sections/gridSection';
import FullWidth from './sections/fullwidth';
import MultiLine from './sections/multiline';
const MainComponent = () => {
  return (
    <Main className='main'>
      <h1 className="main-header">
        Inputs
      </h1>

      <div className="main-container">
        <Default />
        <Error />
        <Disabled />
        <Grid />
        <FullWidth />
        <MultiLine />
      </div>

      <footer className="main-footer">
        <p>created by <a href="https://devchallenges.io/portfolio/DoIfeanyichukwu">DoIfeanyichukwu</a> - devChallenges.io</p>
      </footer>
    </Main>
  )
}

export default MainComponent;