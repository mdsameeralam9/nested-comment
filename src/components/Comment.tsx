
import type { CommentComponentProps } from "../types";
import SingleComment from "./SingleComment";


const CommentComponent:React.FC<CommentComponentProps> = ({ commentData = [], handleReplyComment=()=>{} }) => {
  return (
    <div className="flex flex-col gap-1">
      {commentData.map((data) => (
        <SingleComment data={data} key={data.id} handleReplyComment={handleReplyComment}/>
      ))}
    </div>
  );
};

export default CommentComponent;
