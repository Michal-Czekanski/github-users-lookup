import React from 'react';
import Container from './TopContent.styled';
import Search from '../Search/Search';
import HelpMessage from '../HelpMessage/HelpMessage';

function TopContent (props) {
  return (
    <Container>
      <HelpMessage />
      <Search />
    </Container>
  );
}

export default TopContent;
