const Comment = ({ data = [] }) => {
  return (
    <div className="flex flex-col gap-1">
      {data.map((data) => (
        <div className="comment bg-blue-200 p-1" key={data.id}>
          <div className="commentBody my-1">
            <p className="text-blue-950 font-extrabold">{data.comment}</p>
          </div>
          <div className="commentFooter">
            <button className="bg-blue-950 border-b-black py-0.5 px-8 cursor-pointer text-white">
              Reply
            </button>
          </div>

          <div className="inputwrapeer flex  gap-1 items-center my-2">
            <textarea
              className="w-[80%] border-2 pl-3 bg-white"
              name="message"
              rows="2"
              cols="40"
              placeholder="Type here..."
            ></textarea>
            <button className="bg-blue-950 py-2 border-b-black py-0.5 px-8 cursor-pointer text-white">
              Reply Comment
            </button>
          </div>

          {data?.reply?.length > 0 && (
            <div className="child pl-2 border-l-2">
              <Comment data={data.reply} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Comment;
