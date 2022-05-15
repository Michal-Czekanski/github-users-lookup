import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Container, ContainerTop, DetailsContainer, StatisticsRow, Username } from './UserStatistics.styled';
import { StatisticSecondary } from '../Statistic/Statistic';
import { USER_STATS } from '../../assets/strings';
import reposIcon from '../../assets/icons/32/repo-dark.svg';
import starsIcon from '../../assets/icons/32/star-dark.svg';
import forksIcon from '../../assets/icons/32/fork-dark.svg';
import commentsIcon from '../../assets/icons/32/comment-dark.svg';
import watchersIcon from '../../assets/icons/32/eye-dark.svg';

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
            name={USER_STATS.commits}
            value={props.user.commits}
          />
          <StatisticSecondary
            name={USER_STATS.stars}
            icon={starsIcon}
            value={props.user.stars}
          />
        </StatisticsRow>
        <StatisticsRow>
        <StatisticSecondary
            name={USER_STATS.forks}
            icon={forksIcon}
            value={props.user.forks}
          />
          <StatisticSecondary
            name={USER_STATS.comments}
            icon={commentsIcon}
            value={props.user.comments}
          />
          <StatisticSecondary
            name={USER_STATS.watchers}
            icon={watchersIcon}
            value={props.user.watchers}
          />
        </StatisticsRow>
      </DetailsContainer>
    </Container>
  );
}

UserStatistics.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    commits: PropTypes.number.isRequired,
    stars: PropTypes.number.isRequired,
    forks: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    watchers: PropTypes.number.isRequired
  })
};

export default UserStatistics;
