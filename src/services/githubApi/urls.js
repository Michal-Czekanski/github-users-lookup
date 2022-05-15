export function getUserDataUrl (username) {
  return `https://api.github.com/users/${username}`;
}

export function getUserReposUrl (username) {
  return `${getUserDataUrl(username)}/repos`;
}
