import React from 'react';
import PropTypes from 'prop-types';
import { Container, RepositoryDetailsContainer, RepositoryName, RepositoryNameContainer, TopContentContainer } from './RepositoryInformation.styled';
import externalLinkIcon from '../../assets/icons/32/external-link-dark.svg';
import starIcon from '../../assets/icons/32/star-primary-light.svg';
import forkIcon from '../../assets/icons/32/fork-primary-light.svg';
import commentsIcon from '../../assets/icons/32/comment-primary-light.svg';
import watchersIcon from '../../assets/icons/32/eye-primary-light.svg';
import DropdownButton from '../DropdownButton/DropdownButton';
import { StatisticPrimary } from '../Statistic/Statistic';
import { REPOSITORY_DETAILS } from '../../assets/strings';

class RepositoryInformation extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  expandDetails = () => {
    this.setState((prevState) => {
      return { expanded: !prevState.expanded };
    });
  };

  render () {
    const repo = this.props.repo;

    let detailsContent = <></>;

    if (this.state.expanded) {
      detailsContent =
        <RepositoryDetailsContainer>
          <StatisticPrimary
            name={REPOSITORY_DETAILS.commits}
            value={repo.commits}
          />
          <StatisticPrimary
            icon={starIcon}
            value={repo.stars}
          />
          <StatisticPrimary
            icon={forkIcon}
            value={repo.forks}
          />
          <StatisticPrimary
            icon={commentsIcon}
            value={repo.comments}
          />
          <StatisticPrimary
            icon={watchersIcon}
            value={repo.watchers}
          />
        </RepositoryDetailsContainer>;
    }

    return (
      <Container>
        <TopContentContainer>
          <RepositoryNameContainer>
            <a href={repo.link}>
              <img src={externalLinkIcon} />
            </a>
            <RepositoryName>{repo.name}</RepositoryName>
          </RepositoryNameContainer>
          <DropdownButton
            active={this.state.expanded}
            clickHandler={this.expandDetails}
          />
        </TopContentContainer>
        {detailsContent}
      </Container>
    );
  }

  static propTypes = {
    repo: PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      commits: PropTypes.string.isRequired,
      stars: PropTypes.string.isRequired,
      forks: PropTypes.string.isRequired,
      comments: PropTypes.string.isRequired,
      watchers: PropTypes.string.isRequired
    }).isRequired
  };
}

export default RepositoryInformation;
