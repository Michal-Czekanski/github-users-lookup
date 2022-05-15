import { ERRORS } from '../../assets/strings';

async function doRequest (baseUrl, perPage, pageNum) {
  const url = new URL(baseUrl);
  url.searchParams.append('per_page', perPage);
  url.searchParams.append('page', pageNum);

  const response = await fetch(url);
  if (response.ok) {
    const commentsList = response.json();
    return commentsList;
  } else if (response.status === 403) {
    throw new Error(ERRORS.api_ratelimit);
  } else {
    throw new Error('Error retrieving comments count.');
  }
}

export async function getCommentsCount (commentsUrl) {
  const baseUrl = new URL(commentsUrl);
  const perPage = 100;
  let pageNum = 0;
  let commentsCount = 0;

  let commentsList = await doRequest(baseUrl, perPage, pageNum);

  while (commentsList.length > 0) {
    commentsCount = commentsCount + commentsList.length;
    pageNum++;
    commentsList = await doRequest(baseUrl, perPage, pageNum);
  }

  return commentsCount;
}
