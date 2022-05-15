import React from 'react';
import CenterContainer from '../CenterContainer.styled';
import { ErrorMessage } from '../Message/Message';
import Navbar from '../Navbar/Navbar';
import TopContent from '../TopContent/TopContent';
import { WholeContentContainer } from '../WholeContentContainer/WholeContentContainer.styled';
import WholeFetchedData from '../WholeFetchedData/WholeFetchedData';
// eslint-disable-next-line no-unused-vars
import User from '../../models/User';
import { getUserReposData } from '../../services/githubApi/reposApi';
import { getUserData } from '../../services/githubApi/usersApi';

class MainPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: undefined,
      errorMsg: undefined
    };
  }

  setErrorState = (error) => {
    this.setState({
      user: null,
      errorMsg: error.message
    });
  };

  /**
   * Fetches user's repos data.
   * @param {User} userToUpdate
   */
  fetchUserReposData = async (userToUpdate) => {
    try {
      const reposList = await getUserReposData(userToUpdate);
      userToUpdate.fillRemainingReposData(reposList);
      this.setState({
        user: userToUpdate
      });
    } catch (error) {
      this.setErrorState(error);
    }
  };

  getUserFromApi = async (githubUsername) => {
    try {
      const fetchedUser = await getUserData(githubUsername);
      console.log('User fetched:');
      console.log(fetchedUser);
      this.setState({
        user: fetchedUser,
        errorMsg: null
      });
      this.fetchUserReposData(fetchedUser);
    } catch (error) {
      this.setErrorState(error);
    }
  };

  /**
   * Retrieves data about user from GitHub.
   * @param {string} githubUsername GitHub username
   * @returns {boolean} true if user was found, false otherwise
   */
  handleUserSearch = (githubUsername) => {
    this.getUserFromApi(githubUsername);
    return true;
  };

  render () {
    let mainContent = <></>;

    if (this.state.errorMsg) {
      mainContent =
        <ErrorMessage
          message={this.state.errorMsg}
        />;
    } else if (this.state.user) {
      mainContent =
        <WholeFetchedData
          user={this.state.user}
          errorHandler={this.setErrorState}
        />;
    }

    return (
      <>
        <Navbar />
        <WholeContentContainer >
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
