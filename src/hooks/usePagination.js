import React from "react";

//Pagination
export const usePagination = (totalCount, limit = 10) => {
  const totalPages = React.useMemo(() => {
    if (totalCount) {
      const arr = [];

      for (let i = 0; i < Math.ceil(totalCount / limit); i++) {
        arr.push(i + 1);
      }
      return arr;
    }
    return [1];
  }, [totalCount, limit]);

  return totalPages;
};
