import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type FilterContextType = {
  get: Reddit.PostFilter;
  set: Dispatch<SetStateAction<Reddit.PostFilter>>;
};

export const FilterContext = createContext({} as FilterContextType);

const FilterProvider: React.FC = ({ children }) => {
  const [filter, setFilter] = useState<Reddit.PostFilter>("hot");

  return (
    <FilterContext.Provider value={{ get: filter, set: setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
