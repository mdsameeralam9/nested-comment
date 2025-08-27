import React from "react";

const data = [
    {id: 1, comment: "Hello, how are you", reply: [{id: 2, comment: "I am fine, thank you"}]},
    {id: 3, comment: "Hello, how are you", reply: []},
    {id: 4, comment: "Hello, how are you", reply: [{id: 5, comment: "I am fine, thank you"}]}
]

const NestedComponent = () => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <h2>Nested Component System</h2>
      <div className="w-full">
        <input
          className="border"
          type="text"
          placeholder="Enter your comment"
        />
        <button className="border">comment</button>
      </div>
      <div className="sort">
        <span>Sort by:</span>
        <select>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        {data.map((i, index) => (
          <div className="comment bg-blue-200" key={index}>
            <div className="commentHeader">
              <span>Sameer</span>
              <span>1 hour ago</span>
            </div>
            <div className="commentBody">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod.
              </p>
            </div>
            <div className="commentFooter">
              <button>Reply</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NestedComponent;
