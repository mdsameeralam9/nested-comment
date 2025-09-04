import React, { useCallback, useState } from 'react';
import CommentComponent from '../components/Comment';
import { deleteComment, sortComment, updateComment, updateLikeOrDislike } from '../util';
import type { CommentDataInterface } from '../types';
import TextArea from '../components/TextArea';
import Button from '../components/Button';

const NestedComponent = () => {
  const [commentState, setCommentState] = useState<CommentDataInterface[]>([]);
  const [commentValue, setCommentValue] = useState<string>('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(e.target.value);
  }, []); // stable; does not need state

  const handleComment = useCallback(() => {
    if (!commentValue) return;
    setCommentState((prev) => [
      {
        id: Date.now(),
        comment: commentValue,
        date: new Date(),
        like: 0,
        dislike: 0,
        reply: [],
      },
      ...prev,
    ]);
    setCommentValue('');
  }, [commentValue]); // depends only on the current input

  const handleReplyComment = useCallback((newData = {}) => {
    // compute next state from prev
    setCommentState((prev) => updateComment(prev.slice(), newData));
  }, []);

  const handleLikeOrDislike = (id: number, isLike: boolean): void => {
    setCommentState((prev) => updateLikeOrDislike(prev, id, isLike));
  };

  const handleSort = (sortBy: string): void => {
    setCommentState((prev) => sortComment(prev, sortBy));
  };

  const handleDelete = (id: number) => {
    setCommentState((prev) => deleteComment(prev, id));
  };

  return (
    <div className="flex flex-col gap-1 w-full p-2 pb-3">
      <h2>Nested Component System</h2>

      <form className="w-full flex items-center gap-2">
        <TextArea value={commentValue} onChange={handleChange} placeholder="comment..." />
        <Button label="Comment" onClick={handleComment} />
      </form>

      <div className="sort">
        <span>Sort by:</span>
        <select defaultValue="newest" onChange={(e) => handleSort(e.target.value)}>
          <option value="new">Newest</option>
          <option value="old">Oldest</option>
          <option value="like">Like</option>
          <option value="dislike">DisLike</option>
        </select>
      </div>

      <CommentComponent
        commentData={commentState}
        handleReplyComment={handleReplyComment}
        handleLikeOrDislike={handleLikeOrDislike}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default NestedComponent;
