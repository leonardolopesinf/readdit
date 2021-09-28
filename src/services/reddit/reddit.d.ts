declare namespace Reddit {
  type PostFilter = "hot" | "new" | "top";

  type PostData = {
    author: string;
    created: number;
    name: string;
    permalink: string;
    thumbnail: string;
    title: string;
  };

  type Post = {
    kind: string;
    data: PostData;
  };
}
