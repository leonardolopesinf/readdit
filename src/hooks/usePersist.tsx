import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Response = [string, Dispatch<SetStateAction<string>>];

function usePersist(key: string, initialValue: string): Response {
  const [state, setState] = useState<string>(() => {
    const persistValue = localStorage.getItem(key);

    return persistValue || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}

export default usePersist;
