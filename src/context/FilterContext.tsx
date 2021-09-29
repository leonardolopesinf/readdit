import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type FilterContextType = {
  filter: Reddit.PostFilter;
  setFilter: Dispatch<SetStateAction<Reddit.PostFilter>>;
};

export const FilterContext = createContext({} as FilterContextType);

const FilterProvider: React.FC = ({ children }) => {
  const [filter, setFilter] = useState<Reddit.PostFilter>("hot");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
