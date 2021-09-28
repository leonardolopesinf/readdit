import React from "react";
import FilterProvider from "../../context/FilterContext";
import PostFilter from "./PostFilter";
import PostList from "./PostList";
import { PostsContainer } from "./styles";

const Posts: React.FC = () => {
  return (
    <PostsContainer>
      <FilterProvider>
        <PostFilter />
        <PostList />
      </FilterProvider>
    </PostsContainer>
  );
};

export default Posts;
