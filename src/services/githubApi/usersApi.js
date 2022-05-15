import { ERRORS } from '../../assets/strings';
import User from '../../models/User';
import { getUserDataUrl } from './urls';

/**
 * Parses response from API to User object.
 * @param {*} response Response from GitHub users API
 * @returns {User}
 */
export async function handleUserDataSuccess (response) {
  const json = await response.json();
  console.log('Raw user data from API:');
  console.log(json);
  return User.createFromRawData(json);
}

/**
 * Retrieves User from GitHub
 * @param {string} username
 * @returns {User}
 */
export function getUserData (username) {
  const url = getUserDataUrl(username);
  return fetch(url).then(
    resp => {
      if (resp.ok) {
        return handleUserDataSuccess(resp);
      } else if (resp.status === 403) {
        throw new Error(ERRORS.api_ratelimit);
      } else {
        throw new Error(`User ${username} not found.`);
      }
    }
  );
}
