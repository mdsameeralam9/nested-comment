
import SingleComment from "./SingleComment";

const CommentComponent = ({ commentData = [], handleReplyComment=()=>{} }) => {
 
  return (
    <div className="flex flex-col gap-1">
      {commentData.map((data) => (
        <SingleComment data={data} key={data.id} handleReplyComment={handleReplyComment}/>
      ))}
    </div>
  );
};

export default CommentComponent;
