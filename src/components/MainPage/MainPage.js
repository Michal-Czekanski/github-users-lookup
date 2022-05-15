import React from 'react';
import { getUserData } from '../../services/api';
import CenterContainer from '../CenterContainer.styled';
import { ErrorMessage } from '../Message/Message';
import Navbar from '../Navbar/Navbar';
import TopContent from '../TopContent/TopContent';
import { WholeContentContainer } from '../WholeContentContainer/WholeContentContainer.styled';
import WholeFetchedData from '../WholeFetchedData/WholeFetchedData';

class MainPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: undefined,
      userNotFoundError: false
    };

    // FOR DEV
    this.state.user = getUserData('Michal-Czekanski');
  }

  /**
   * Retrieves data about user from GitHub.
   * @param {string} githubUsername GitHub username
   * @returns {boolean} true if user was found, false otherwise
   */
  handleUserSearch = (githubUsername) => {
    try {
      const userData = getUserData(githubUsername);
      this.setState({
        user: userData,
        userNotFoundError: false
      });
      return true;
    } catch (error) {
      this.setState({
        user: { username: githubUsername },
        userNotFoundError: true
      });
      return false;
    }
  };

  render () {
    let mainContent = <></>;

    if (this.state.userNotFoundError) {
      mainContent =
        <ErrorMessage
          username={this.state.user.username}
        />;
    } else if (this.state.user) {
      mainContent = <WholeFetchedData user={this.state.user}/>;
    }

    return (
      <>
        <Navbar />
        <WholeContentContainer>
          <CenterContainer>
            <TopContent
              searchUserHandler={this.handleUserSearch}
            />
            {mainContent}
          </CenterContainer>
        </WholeContentContainer>
      </>
    );
  }
}

export default MainPage;
