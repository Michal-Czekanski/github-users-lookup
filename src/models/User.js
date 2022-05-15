// eslint-disable-next-line no-unused-vars
import Repo from './Repo';

class User {
  constructor (name, avatar, publicReposCount) {
    this.username = name;
    this.avatar = avatar;
    this.repos = publicReposCount;

    this.stars = undefined;
    this.forks = undefined;
    this.reposList = undefined;
    this.watchers = undefined;
  }

  static createFromRawData = (rawJsonData) => {
    const user = new User(
      rawJsonData.login,
      rawJsonData.avatar_url,
      rawJsonData.public_repos
    );
    return user;
  };

  /**
   * Fills remaining data about repos.
   * @param {Array<Repo>} reposList list of user's repos
   */
  fillRemainingReposData = (reposList) => {
    this.reposList = reposList;

    this.stars = 0;
    this.forks = 0;

    for (const repo of reposList) {
      this.stars = this.stars + repo.stars;
      this.forks = this.forks + repo.forks;
    }
  };
}

export default User;
