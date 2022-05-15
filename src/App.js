import './App.css';
import Navbar from './components/Navbar/Navbar';
import React from 'react';
import { WholeContentContainer } from './components/WholeContentContainer/WholeContentContainer.styled';
import HelpMessage from './components/HelpMessage/HelpMessage';
import CenterContainer from './components/CenterContainer.styled';
import Search from './components/Search/Search';

function App () {
  return (
    <>
      <Navbar />
      <WholeContentContainer>
        <CenterContainer>
          <HelpMessage />
          <Search />
        </CenterContainer>
      </WholeContentContainer>
    </>
  );
}

export default App;
