export function getUserData (username) {
  if (username === 'Michal-Czekanski') {
    return {
      username: 'Michal-Czekanski',
      avatar: 'https://avatars.githubusercontent.com/u/43492764?v=4',
      repos: 12,
      commits: 123123,
      stars: 5,
      forks: 1,
      comments: 1231,
      watchers: 2
    };
  }

  throw new Error(`User ${username} not found.`);
}
