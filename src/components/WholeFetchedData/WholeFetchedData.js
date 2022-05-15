import React from 'react';
import UserStatistics from '../UserStatistics/UserStatistics';
import PropTypes from 'prop-types';
import Repositories from '../Repositories/Repositories';

const repo = {
  name: 'Repo name 1',
  link: 'https://github.com/Michal-Czekanski/ACO_ShortestPath',
  commits: 123,
  comments: 123,
  forks: 123,
  stars: 123,
  watchers: 123
};

class WholeFetchedData extends React.Component {
  render () {
    return (
      <>
        <UserStatistics
          user={this.props.user}
        />
        <Repositories
          repos={[
            repo, repo, repo, repo, repo, repo, repo, repo, repo, repo
          ]}
        />
      </>
    );
  }

  static propTypes = {
    user: PropTypes.object.isRequired
  };
}

export default WholeFetchedData;
