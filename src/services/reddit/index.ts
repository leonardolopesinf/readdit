import axios from "axios";

export const redditUrl = "https://www.reddit.com";

export const getPosts = (
  filter: Reddit.PostFilter,
  limit: number,
  after?: string
) => {
  return new Promise<Reddit.Post[]>((resolve, reject) => {
    let requestUrl = `${redditUrl}/r/reactjs/${filter}.json?limit=${limit}`;

    if (after) requestUrl += `&after=${after}`;

    axios
      .get(requestUrl)
      .then((response) => {
        const subreddit = response.data;

        const posts: Reddit.Post[] = subreddit.data.children;

        resolve(posts);
      })
      .catch((error) => {
        const { status } = error.response;

        const message =
          status === 404
            ? "Não foi possível encontrar os posts."
            : "Ocorreu um erro ao tentar buscar os posts.";

        reject(message);
      });
  });
};
