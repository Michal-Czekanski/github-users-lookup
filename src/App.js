import './App.css';
import Navbar from './components/Navbar/Navbar';
import React from 'react';
import { WholeContentContainer } from './components/WholeContentContainer/WholeContentContainer.styled';
import CenterContainer from './components/CenterContainer.styled';
import TopContent from './components/TopContent/TopContent';

function App () {
  return (
    <>
      <Navbar />
      <WholeContentContainer>
        <CenterContainer>
          <TopContent />
        </CenterContainer>
      </WholeContentContainer>
    </>
  );
}

export default App;
