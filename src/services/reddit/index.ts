import axios from "axios";

export const redditUrl = "https://www.reddit.com";

export const getPosts = async (
  filter: Reddit.PostFilter,
  limit: number,
  after?: string
) => {
  try {
    let requestUrl = `${redditUrl}/r/reactjs/${filter}.json?limit=${limit}`;

    if (after) requestUrl += `&after=${after}`;

    const subreddit = (await axios.get(requestUrl)).data;

    const posts: Reddit.Post[] = subreddit.data.children;

    return posts;
  } catch (error: any) {
    const { status } = error.response;

    const message =
      status === 404
        ? "Não foi possível encontrar os posts."
        : "Ocorreu um erro ao tentar buscar os posts.";

    throw new Error(message);
  }
};
