import './App.css';
import Navbar from './components/Navbar/Navbar';
import React from 'react';
import { WholeContentContainer } from './components/WholeContentContainer/WholeContentContainer.styled';
import HelpMessage from './components/HelpMessage/HelpMessage';

function App () {
  return (
    <>
      <Navbar />
      <WholeContentContainer>
        <HelpMessage/>
      </WholeContentContainer>
    </>
  );
}

export default App;
