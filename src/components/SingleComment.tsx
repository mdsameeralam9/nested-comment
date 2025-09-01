import { useState } from "react";
import type { ReplyInterface, SingleCommentProps } from "../types";
import TextArea from "./TextArea";
import { isArrayAndHasLength } from "../util";
import Button from "./Button";

const SingleComment: React.FC<SingleCommentProps> = ({
  data,
  handleReplyComment = () => {},
}) => {
  const [isReplying, setIsReplying] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [replyComment, setReplyComment] = useState("");

  const handleReply = (id: number) => {
    setIsReplying(!isReplying);
    setSelectedId(id);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyComment(e.target.value);
  };

  // handle replycommnet
  const handleReplyCommnet = () => {
    if (!replyComment || !selectedId) return;
    const reply: ReplyInterface = {
      parentId: selectedId,
      comment: replyComment,
    };

    handleReplyComment(reply);
    setReplyComment("");
  };

  return (
    <div className="comment bg-blue-200 p-1">
      {/** parent comment render */}
      <div className="commentBody my-1">
        <p className="text-xs text-gray-500">{data.date.toDateString()}</p>
        <p className="text-blue-950 font-extrabold">{data.comment}</p>
      </div>
      <div className="commentFooter">
        <Button label="Reply" onClick={() => handleReply(data.id)} />
      </div>

      {/**  reply input render */}
      {isReplying && (
        <>
          <div className="inputwrapeer flex  gap-1 items-center my-2">
            <TextArea
              value={replyComment}
              onChange={handleChange}
              placeholder="reply comment..."
            />
            <Button label="Reply Comment" onClick={handleReplyCommnet} />
          </div>

          {/**  child render */}
          {isArrayAndHasLength(data.reply) && (
            <div className="child pl-2 border-l-2">
              {data.reply?.map((data) => (
                <SingleComment
                  data={data}
                  key={data.id}
                  handleReplyComment={handleReplyComment}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SingleComment;
