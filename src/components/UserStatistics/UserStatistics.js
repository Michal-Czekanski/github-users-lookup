import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Container, ContainerTop, DetailsContainer, StatisticsRow, Username } from './UserStatistics.styled';
import { StatisticSecondary } from '../Statistic/Statistic';
import { USER_STATS } from '../../assets/strings';
import reposIcon from '../../assets/icons/32/repo-dark.svg';
import starsIcon from '../../assets/icons/32/star-dark.svg';
import forksIcon from '../../assets/icons/32/fork-dark.svg';
import User from '../../models/User';

function UserStatistics (props) {
  return (
    <Container>
      <ContainerTop>
        <Avatar
          src={props.user.avatar}
        />
        <Username>{props.user.username}</Username>
      </ContainerTop>

      <DetailsContainer>
        <StatisticsRow>
          <StatisticSecondary
            name={USER_STATS.repos}
            icon={reposIcon}
            value={props.user.repos}
          />
          <StatisticSecondary
            name={USER_STATS.stars}
            icon={starsIcon}
            value={props.user.stars}
          />
        <StatisticSecondary
            name={USER_STATS.forks}
            icon={forksIcon}
            value={props.user.forks}
          />
        </StatisticsRow>
      </DetailsContainer>
    </Container>
  );
}

UserStatistics.propTypes = {
  user: PropTypes.instanceOf(User).isRequired
};

export default UserStatistics;
