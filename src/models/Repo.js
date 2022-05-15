import { getCommitsCount } from '../services/githubApi/commitsApi';
import { getCommentsCount } from '../services/githubApi/commentsApi';
import { getRepoWatchersCount } from '../services/githubApi/reposApi';

class RepoUrls {
  constructor (apiUrl, commitsUrl, commentsUrl) {
    this.apiUrl = apiUrl;
    this.commitsUrl = commitsUrl;
    this.commentsUrl = commentsUrl;
  }
}

class Repo {
  constructor (name, link, stars, forks) {
    this.name = name;
    this.link = link;
    this.stars = stars;
    this.forks = forks;

    this.comments = undefined;
    this.commits = undefined;
    this.watchers = undefined;

    this.detailsFetched = false;

    this.urls = undefined;
  }

  static createFromRawData = (rawJsonData) => {
    const repo = new Repo(
      rawJsonData.name,
      rawJsonData.html_url,
      rawJsonData.stargazers_count,
      rawJsonData.forks_count
    );

    repo.urls = new RepoUrls(
      rawJsonData.url,
      // Remove {/sha} from end of url
      rawJsonData.commits_url.slice(0, rawJsonData.commits_url.length - 6),
      // Remove {/number} from end of url
      rawJsonData.comments_url.slice(0, rawJsonData.comments_url.length - 9)
    );
    return repo;
  };

  fillMissingDetailsData = async () => {
    if (!this.detailsFetched) {
      const [commitsCount, commentsCount, watchersCount] = await Promise.all([
        getCommitsCount(this.urls.commitsUrl),
        getCommentsCount(this.urls.commentsUrl),
        getRepoWatchersCount(this.urls.apiUrl)
      ]);

      this.comments = commentsCount;
      this.commits = commitsCount;
      this.watchers = watchersCount;

      this.detailsFetched = true;
    }
  };
}

export default Repo;
