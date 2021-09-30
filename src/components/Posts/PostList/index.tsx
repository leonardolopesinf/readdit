import React, { useCallback, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FilterContext } from "../../../context/FilterContext";
import { getPosts } from "../../../services/reddit";
import removeArrayExcess from "../../../utils/removeArrayExcess";
import Post from "../Post";
import PostSkeleton from "../PostSkeleton";
import ShowMore from "../ShowMore";
import { PostListContainer } from "./styles";

const PostList: React.FC = () => {
  const { filter } = useContext(FilterContext);

  const [posts, setPosts] = useState<Reddit.Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getRedditPosts = useCallback(
    async (lastPost?: string) => {
      try {
        const postsLimit = 10;

        let posts = await getPosts(filter, postsLimit, lastPost);

        if (!lastPost && posts.length > postsLimit)
          posts = removeArrayExcess(posts, postsLimit);

        setPosts((state) => (lastPost ? [...state, ...posts] : posts));
      } catch (error) {
        toast(error as string, { type: "error" });
      }
    },
    [filter]
  );

  const handleShowMore = useCallback(async () => {
    const lastPost = posts[posts.length - 1];

    const lastPostName = lastPost.data.name;

    await getRedditPosts(lastPostName);
  }, [getRedditPosts, posts]);

  useEffect(() => {
    setLoading(true);

    getRedditPosts().finally(() => setLoading(false));

    return () => {
      setLoading(false);
    };
  }, [getRedditPosts]);

  return (
    <PostListContainer data-testid="post-list">
      {!loading ? (
        posts.map(({ data: post }, index) => (
          <Post post={post} key={post.name + index} />
        ))
      ) : (
        <PostSkeleton />
      )}

      {posts.length >= 10 && <ShowMore onClick={handleShowMore} />}
    </PostListContainer>
  );
};

export default PostList;
