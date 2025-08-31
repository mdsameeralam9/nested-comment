import React, { useCallback, useState } from "react";
import CommentComponent from "../components/Comment";
import { updateComment } from "../util";

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
  const [commnetState, setCommnetState] = useState([...data]);
  const [commnetValue, setCommnetValue] = useState("");

  const handleChange = (e) => {
    setCommnetValue(e.target.value);
  };
  
  const handleComment = (e) => {
    e?.preventDefault();
    if (!commnetValue) return;
    let copy = commnetState.slice();
    copy = [{ id: Date.now(), comment: commnetValue, reply: [] }, ...copy];
    setCommnetState(copy);
    setCommnetValue("");
  };

  // handle comment from nested component
  const handleReplyComment = (newData = {}) => {
    if(!newData.parentId) return false;
    let copy = commnetState.slice();
    copy = updateComment(copy, newData);
    setCommnetState(copy);
  };


  return (
    <div className="flex flex-col gap-1 w-full p-2 pb-3">
      <h2>Nested Component System</h2>
      <div className="w-full flex items-center gap-2">
        <textarea
          value={commnetValue}
          className="border"
          rows="2"
          cols="50"
          placeholder="Enter your comment"
          onChange={handleChange}
        ></textarea>
        <button
          className="cursor-pointer bg-blue-950 text-white px-4 py-2 border"
          onClick={handleComment}
        >
          comment
        </button>
      </div>
      <div className="sort">
        <span>Sort by:</span>
        <select>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      <CommentComponent
        commentData={commnetState}
        handleReplyComment={handleReplyComment}
      />
    </div>
  );
};

export default NestedComponent;
