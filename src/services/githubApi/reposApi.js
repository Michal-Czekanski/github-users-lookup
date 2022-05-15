import Repo from '../../models/Repo';

import { ERRORS } from '../../assets/strings';
// eslint-disable-next-line no-unused-vars
import User from '../../models/User';
import { getUserReposUrl } from './urls';

function parseRawReposList (rawReposList) {
  console.log('Raw repos list: ');
  console.log(rawReposList);
  const repos = [];
  for (const rawRepo of rawReposList) {
    repos.push(Repo.createFromRawData(rawRepo));
  }

  return repos;
}

export async function getRepoWatchersCount (repoApiUrl) {
  const response = await fetch(repoApiUrl);
  if (response.ok) {
    const json = await response.json();
    return json.subscribers_count;
  } else if (response.status === 403) {
    throw new Error(ERRORS.api_ratelimit);
  } else {
    throw new Error('Error fetching details about repo.');
  }
}

/**
 *
 * @param {User} user
 * @returns
 */
export async function getUserReposData (user) {
  const url = getUserReposUrl(user.username);
  const response = await fetch(url);
  if (response.ok) {
    const rawReposList = await response.json();
    return parseRawReposList(rawReposList);
  } else if (response.status === 403) {
    throw new Error(ERRORS.api_ratelimit);
  } else {
    throw new Error('Error fetching repos.');
  }
}

// eslint-disable-next-line no-unused-vars
const rawData2 = [
  {
    id: 296886724,
    node_id: 'MDEwOlJlcG9zaXRvcnkyOTY4ODY3MjQ=',
    name: 'ACO_ShortestPath',
    full_name: 'Michal-Czekanski/ACO_ShortestPath',
    private: false,
    owner: {
      login: 'Michal-Czekanski',
      id: 43492764,
      node_id: 'MDQ6VXNlcjQzNDkyNzY0',
      avatar_url: 'https://avatars.githubusercontent.com/u/43492764?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Michal-Czekanski',
      html_url: 'https://github.com/Michal-Czekanski',
      followers_url: 'https://api.github.com/users/Michal-Czekanski/followers',
      following_url: 'https://api.github.com/users/Michal-Czekanski/following{/other_user}',
      gists_url: 'https://api.github.com/users/Michal-Czekanski/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/Michal-Czekanski/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Michal-Czekanski/subscriptions',
      organizations_url: 'https://api.github.com/users/Michal-Czekanski/orgs',
      repos_url: 'https://api.github.com/users/Michal-Czekanski/repos',
      events_url: 'https://api.github.com/users/Michal-Czekanski/events{/privacy}',
      received_events_url: 'https://api.github.com/users/Michal-Czekanski/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/Michal-Czekanski/ACO_ShortestPath',
    description: 'Ant Colony Optimization - Shortest Path Problem',
    fork: false,
    url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath',
    forks_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/forks',
    keys_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/keys{/key_id}',
    collaborators_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/teams',
    hooks_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/hooks',
    issue_events_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/issues/events{/number}',
    events_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/events',
    assignees_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/assignees{/user}',
    branches_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/branches{/branch}',
    tags_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/tags',
    blobs_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/languages',
    stargazers_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/stargazers',
    contributors_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/contributors',
    subscribers_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/subscribers',
    subscription_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/subscription',
    commits_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/commits{/sha}',
    git_commits_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/git/commits{/sha}',
    comments_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/comments{/number}',
    issue_comment_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/contents/{+path}',
    compare_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/merges',
    archive_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/downloads',
    issues_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/issues{/number}',
    pulls_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/pulls{/number}',
    milestones_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/milestones{/number}',
    notifications_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/labels{/name}',
    releases_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/releases{/id}',
    deployments_url: 'https://api.github.com/repos/Michal-Czekanski/ACO_ShortestPath/deployments',
    created_at: '2020-09-19T14:29:19Z',
    updated_at: '2022-04-20T19:45:46Z',
    pushed_at: '2020-10-14T12:16:55Z',
    git_url: 'git://github.com/Michal-Czekanski/ACO_ShortestPath.git',
    ssh_url: 'git@github.com:Michal-Czekanski/ACO_ShortestPath.git',
    clone_url: 'https://github.com/Michal-Czekanski/ACO_ShortestPath.git',
    svn_url: 'https://github.com/Michal-Czekanski/ACO_ShortestPath',
    homepage: null,
    size: 2032,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'Python',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: 'master'
  }
];
