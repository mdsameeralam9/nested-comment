import React from "react";
import Comment from "../components/Comment";

const data = [
  {
    id: 1,
    comment: "Hello, how are you",
    reply: [
      {
        id: 2,
        comment: "I am fine, thank you",
        reply: [{ id: 32, comment: "I am fine, thank you", reply: [] }],
      },
      { id: 23, comment: "where are you ?" },
    ],
  },
  { id: 3, comment: "Are you there", reply: [] },
  {
    id: 4,
    comment: "So I donot know",
    reply: [{ id: 5, comment: "we are doing, good" }],
  },
];

const NestedComponent = () => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <h2>Nested Component System</h2>
      <div className="w-full">
        <input
          className="border"
          type="text"
          placeholder="Enter your comment"
        />
        <button className="border">comment</button>
      </div>
      <div className="sort">
        <span>Sort by:</span>
        <select>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      <Comment data={data} />
    </div>
  );
};

export default NestedComponent;
