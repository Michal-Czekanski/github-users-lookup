import { ERRORS } from '../../assets/strings';

async function doRequest (baseUrl, perPage, pageNum) {
  const url = new URL(baseUrl);
  url.searchParams.append('per_page', perPage);
  url.searchParams.append('page', pageNum);

  const response = await fetch(url);
  if (response.ok) {
    const commitsList = response.json();
    return commitsList;
  } else if (response.status === 403) {
    throw new Error(ERRORS.api_ratelimit);
  } else {
    throw new Error('Error retrieving commits count.');
  }
}

export async function getCommitsCount (commitsUrl) {
  const baseUrl = new URL(commitsUrl);
  const perPage = 100;
  let pageNum = 0;
  let commitsCount = 0;

  let commitsList = await doRequest(baseUrl, perPage, pageNum);

  while (commitsList.length > 0) {
    commitsCount = commitsCount + commitsList.length;
    pageNum++;
    commitsList = await doRequest(baseUrl, perPage, pageNum);
  }

  return commitsCount;
}
