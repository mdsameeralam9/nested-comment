
import SingleComment from "./SingleComment";

const CommentComponent = ({ commentData = [] }) => {
 
  return (
    <div className="flex flex-col gap-1">
      {commentData.map((data) => (
        <SingleComment data={data} key={data.id}/>
      ))}
    </div>
  );
};

export default CommentComponent;
