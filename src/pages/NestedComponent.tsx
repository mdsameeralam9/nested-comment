import React, { useCallback, useState } from "react";
import CommentComponent from "../components/Comment";
import { initial_data, updateComment } from "../util";
import type { CommentDataInterface } from "../types";
import TextArea from "../components/TextArea";
import Button from "../components/Button";

const NestedComponent = () => {
  const [commentState, setCommentState] =
    useState<CommentDataInterface[]>();
  const [commentValue, setCommentValue] = useState<string>("");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCommentValue(e.target.value);
    },
    []
  ); // stable; does not need state

  const handleComment = useCallback(() => {
    if (!commentValue) return;
    setCommentState((prev) => [
      { id: Date.now(), comment: commentValue, reply: [] },
      ...prev,
    ]);
    setCommentValue("");
  }, [commentValue]); // depends only on the current input

  const handleReplyComment = useCallback((newData = {}) => {
    // compute next state from prev
    setCommentState((prev) => updateComment(prev.slice(), newData));
  }, []);

  return (
    <div className="flex flex-col gap-1 w-full p-2 pb-3">
      <h2>Nested Component System</h2>

      <div className="w-full flex items-center gap-2">
        <TextArea
          value={commentValue}
          onChange={handleChange}
          placeholder="comment..."
        />
        <Button label="Comment" onClick={handleComment} />
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
