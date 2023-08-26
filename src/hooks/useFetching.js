import { useState } from "react";

export const useFetching = (callback) => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  const fetching = async (...args) => {
    try {
      setLoader(true);
      await callback(...args);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoader(false);
    }
  };

  return [fetching, loader, error];
};
