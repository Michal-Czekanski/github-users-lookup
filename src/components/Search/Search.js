import React from 'react';
import { Container, Input, SearchForm } from './Search.styled';
import searchIcon from '../../assets/icons/32/search-bright.svg';
import { INPUT_PLACEHOLDER } from '../../assets/strings';
import PropTypes from 'prop-types';

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: undefined,
      userNotFoundError: false
    };
  }

  handleChange = (e) => {
    this.setState({ username: e.target.value, userNotFoundError: false });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.username) {
      const userFound = this.props.searchUserHandler(this.state.username);
      if (userFound) {
        this.setState({ userNotFoundError: false });
      } else {
        this.setState({ userNotFoundError: true });
      }
    }
  };

  render () {
    return (
      <>
        <Container>
          <img src={searchIcon} alt={'search-icon'} />
          <SearchForm
            onSubmit={this.handleSubmit}>
          <Input
            placeholder={INPUT_PLACEHOLDER}
            onChange={this.handleChange}
            error={this.state.userNotFoundError}
          />
          </SearchForm>
        </Container>
      </>

    );
  }

  static propTypes = {
    searchUserHandler: PropTypes.func
  };
}

export default Search;
