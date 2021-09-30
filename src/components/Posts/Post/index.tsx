import React from "react";
import { redditUrl } from "../../../services/reddit";
import formatCreatedTime from "../../../utils/formatCreatedTime";
import formatUrl from "../../../utils/formatUrl";
import Picture from "../../Picture";
import { PostContainer, PostDescription, PostThumbnail } from "./styles";

type Props = {
  post: Reddit.PostData;
};

const Post: React.FC<Props> = ({ post }) => {
  return (
    <li data-testid="post">
      <div className="divider" />
      <PostContainer>
        <PostThumbnail>
          <Picture src={post.thumbnail} alt="post thumbnail" />
        </PostThumbnail>
        <PostDescription>
          <span className="title">{post.title}</span>
          <div>
            <span className="created" data-testid="post-send-date">
              enviado há {formatCreatedTime(post.created)} por{" "}
            </span>
            <a
              target="_blank"
              rel="noreferrer"
              href={`${redditUrl}/user/${post.author}`}
              className="author"
            >
              {post.author}
            </a>
          </div>
          <a
            data-testid="post-url"
            target="_blank"
            rel="noreferrer"
            href={`${redditUrl}${post.permalink}`}
            className="url"
          >
            {formatUrl(`${redditUrl}${post.permalink}`)}
          </a>
        </PostDescription>
      </PostContainer>
    </li>
  );
};

export default Post;
