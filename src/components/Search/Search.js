import React from 'react';
import { Container, Input, SearchForm } from './Search.styled';
import searchIcon from '../../assets/icons/32/search-bright.svg';
import { INPUT_PLACEHOLDER } from '../../assets/strings';
import PropTypes from 'prop-types';

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: undefined
    };
  }

  handleChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.username) {
      this.props.searchUser(this.state.username);
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
          />
          </SearchForm>
        </Container>
      </>

    );
  }

  static propTypes = {
    searchUser: PropTypes.func
  };
}

export default Search;
