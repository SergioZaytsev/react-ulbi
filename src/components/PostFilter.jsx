import React from "react";
import MyInput from "./UI//input/MyInput";
import Myselect from "./UI/select/Myselect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        type="text"
        placeholder="Поиск..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <Myselect
        defaultValue="сортировка"
        options={[
          {
            value: "title",
            name: "названию",
          },
          {
            value: "body",
            name: "описанию",
          },
        ]}
        value={filter.value}
        onChange={(e) => setFilter({ ...filter, sort: e.target.value })}
      />
    </div>
  );
};
//
export default PostFilter;
