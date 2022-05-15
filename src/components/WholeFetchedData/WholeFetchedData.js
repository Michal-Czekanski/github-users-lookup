import React from 'react';
import UserStatistics from '../UserStatistics/UserStatistics';
import PropTypes from 'prop-types';
import Repositories from '../Repositories/Repositories';

class WholeFetchedData extends React.Component {
  render () {
    let reposList = [];
    if (this.props.user.reposList) {
      reposList = this.props.user.reposList;
    }

    return (
      <>
        <UserStatistics
          user={this.props.user}
        />
        <Repositories
          repos={reposList}
          errorHandler={this.props.errorHandler}
        />
      </>
    );
  }

  static propTypes = {
    user: PropTypes.shape({
      reposList: PropTypes.arrayOf(PropTypes.object)
    }).isRequired,
    errorHandler: PropTypes.func.isRequired
  };
}

export default WholeFetchedData;
