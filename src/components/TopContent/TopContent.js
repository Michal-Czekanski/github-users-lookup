import React from 'react';
import Container from './TopContent.styled';
import Search from '../Search/Search';
import PropTypes from 'prop-types';
import { HelpMessage } from '../Message/Message';

function TopContent (props) {
  return (
    <Container>
      <HelpMessage />
      <Search
        searchUserHandler={props.searchUserHandler}
      />
    </Container>
  );
}

TopContent.propTypes = {
  searchUserHandler: PropTypes.func.isRequired
};

export default TopContent;
