import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Repositories.styled';
import RepositoryInformation from '../RepositoryInformation/RepositoryInformation';
import Repo from '../../models/Repo';

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
                errorHandler={this.props.errorHandler}
              />
            );
          }
        )}
      </Container>
    );
  }

  static propTypes = {
    repos: PropTypes.arrayOf(
      PropTypes.instanceOf(Repo)
    ).isRequired,
    errorHandler: PropTypes.func.isRequired
  };
}

export default Repositories;
