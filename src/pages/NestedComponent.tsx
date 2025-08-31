import React, { useCallback, useState } from "react";
import CommentComponent from "../components/Comment";
import { initial_data, updateComment } from "../util";
import type { CommentDataInterface } from "../types";

const NestedComponent = () => {
  const [commentState, setCommentState] = useState<CommentDataInterface[]>(initial_data);
  const [commentValue, setCommentValue] = useState<string>("");

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(e.target.value);
  }, []); // stable; does not need state

  const handleComment = useCallback(() => {
    if (!commentValue) return;
    // functional update removes commentState from deps, avoiding stale closures
    setCommentState(prev => [
      { id: Date.now(), comment: commentValue, reply: [] },
      ...prev,
    ]);
    setCommentValue("");
  }, [commentValue]); // depends only on the current input

  const handleReplyComment = useCallback((newData = {}) => {
    // functional update; compute next state from prev
    setCommentState(prev => updateComment(prev.slice(), newData));
  }, []);

  return (
    <div className="flex flex-col gap-1 w-full p-2 pb-3">
      <h2>Nested Component System</h2>

      <div className="w-full flex items-center gap-2">
        <textarea
          value={commentValue}
          className="border"
          rows={2}
          cols={50}
          placeholder="Enter your comment"
          onChange={handleChange}
        />
        <button
          className="cursor-pointer bg-blue-950 text-white px-4 py-2 border"
          onClick={handleComment}
          disabled={!commentValue.trim()}
        >
          comment
        </button>
      </div>

      <div className="sort">
        <span>Sort by:</span>
        <select defaultValue="newest">
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      <CommentComponent
        commentData={commentState}
        handleReplyComment={handleReplyComment}
      />
    </div>
  );
};

export default NestedComponent;
