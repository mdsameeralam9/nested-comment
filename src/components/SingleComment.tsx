import { useState } from "react";
import type { ReplyInterface, SingleCommentProps } from "../types";
import TextArea from "./TextArea";

const SingleComment: React.FC<SingleCommentProps> = ({
  data = {},
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
        <p className="text-blue-950 font-extrabold">{data.comment}</p>
      </div>
      <div className="commentFooter">
        <button
          onClick={() => handleReply(data.id)}
          className="bg-blue-950 border-b-black py-0.5 px-8 cursor-pointer text-white"
        >
          Reply
        </button>
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
            <button
              onClick={handleReplyCommnet}
              className="bg-blue-950 py-2 border-b-black py-0.5 px-8 cursor-pointer text-white"
            >
              Reply Comment
            </button>
          </div>

          {/**  child render */}
          {data?.reply?.length > 0 && (
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
