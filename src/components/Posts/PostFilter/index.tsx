import React, { MouseEvent, useCallback, useContext } from "react";
import { FilterContext } from "../../../context/FilterContext";
import { PostFilterButton, PostFilterContainer } from "./styles";

const filterNames: Posts.FilterNames = {
  hot: "Hot",
  new: "News",
  top: "Rising",
};

const PostFilter: React.FC = () => {
  const { filter, setFilter } = useContext(FilterContext);

  const handleChangeFilter = useCallback(
    (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
      const { value: selectedFilter } = event.currentTarget;

      setFilter(selectedFilter as Reddit.PostFilter);
    },
    [setFilter]
  );

  return (
    <PostFilterContainer data-testid="filter-buttons">
      {Object.keys(filterNames).map((buttonValue, index) => {
        const buttonText = filterNames[buttonValue as Reddit.PostFilter];

        return (
          <PostFilterButton
            key={index}
            value={buttonValue}
            active={filter === buttonValue}
            onClick={handleChangeFilter}
          >
            {buttonText}
          </PostFilterButton>
        );
      })}
    </PostFilterContainer>
  );
};

export default PostFilter;
