import React from "react";
import { redditUrl } from "../../../services/reddit";
import formatUrl from "../../../utils/formatUrl";
import Picture from "../../Picture";
import { PostContainer, PostDescription, PostThumbnail } from "./styles";

type Props = {
  post: Reddit.PostData;
};

const Post: React.FC<Props> = ({ post }) => {
  return (
    <li>
      <div className="divider" />
      <PostContainer>
        <PostThumbnail>
          <Picture
            defaultSrc="https://cdn-icons-png.flaticon.com/512/52/52053.png"
            src={post.thumbnail}
            alt="post thumbnail"
          />
        </PostThumbnail>
        <PostDescription>
          <span className="title">{post.title}</span>
          <div>
            <span className="created">enviado há {post.created} por </span>
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
