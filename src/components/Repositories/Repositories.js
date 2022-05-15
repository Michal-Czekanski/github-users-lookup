import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Repositories.styled';
import RepositoryInformation from '../RepositoryInformation/RepositoryInformation';

class Repositories extends React.Component {
  render () {
    return (
      <Container>
        {/* Iterate over repos to render them: */}
        {this.props.repos.map(
          repo => {
            return (
              <RepositoryInformation
                key={repo.name}
                repo={repo}
              />
            );
          }
        )}
      </Container>
    );
  }

  static propTypes = {
    repos: PropTypes.arrayOf(PropTypes.object)
  };
}

export default Repositories;
