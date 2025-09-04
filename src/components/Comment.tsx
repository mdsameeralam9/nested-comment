import { memo } from 'react';
import type { CommentComponentProps } from '../types';
import SingleComment from './SingleComment';

const CommentComponent: React.FC<CommentComponentProps> = ({
  commentData = [],
  handleReplyComment = () => {},
  handleLikeOrDislike,
  handleDelete,
}) => {
  return (
    <div className="flex flex-col gap-1">
      {commentData.map((data) => (
        <SingleComment
          data={data}
          key={data.id}
          handleReplyComment={handleReplyComment}
          handleLikeOrDislike={handleLikeOrDislike}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default memo(CommentComponent);
