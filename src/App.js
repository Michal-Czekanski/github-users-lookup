import './App.css';
import Navbar from './components/Navbar/Navbar';
import React from 'react';
import { WholeContentContainer } from './components/WholeContentContainer/WholeContentContainer.styled';
import CenterContainer from './components/CenterContainer.styled';
import TopContent from './components/TopContent/TopContent';
import UserStatistics from './components/UserStatistics/UserStatistics';

function App () {
  return (
    <>
      <Navbar />
      <WholeContentContainer>
        <CenterContainer>
          <TopContent />
          <UserStatistics
            user={{
              username: 'john',
              avatar: 'https://avatars.githubusercontent.com/u/43492764?v=4',
              repos: 123,
              commits: 123,
              stars: 123,
              forks: 123,
              comments: 123,
              watchers: 123
            }}
          />
        </CenterContainer>
      </WholeContentContainer>
    </>
  );
}

export default App;
