export const initial_data = [
  {
    id: 1,
    comment: "Hello, how are you",
    reply: [
      {
        id: 2,
        comment: "I am fine, thank you",
        reply: [{ id: 32, comment: "I am fine, thank you", reply: [] }],
      },
      { id: 23, comment: "where are you ?" },
    ],
    like: 0,
    dislike: 0
  },
  { id: 3, comment: "Are you there", reply: [] },
  {
    id: 4,
    comment: "So I donot know",
    reply: [{ id: 5, comment: "we are doing, good" }],
  },
];

export const updateComment = (commentState, newData) => {
  const newComment = {
    comment: newData.comment,
    id: Date.now(),
    reply: [],
  };

  const newUpdatedState = commentState.map((item) => {
    if (item.id === newData.parentId) {
      return { ...item, reply: [...item.reply, newComment] };
    } else if (Array.isArray(item.reply) && item.reply.length > 0) {
      return { ...item, reply: updateComment(item.reply, newData) };
    } else return item;
  });
  return newUpdatedState;
};

export const isArrayAndHasLength = (arr) => Array.isArray(arr) && arr.length > 0;


export const updateLikeOrDislike = (data, id, isLike) => {
  let copy = data.slice();
  copy = copy.map(item => {
    if(item.id === id){
      return isLike ? {...item, like:item.like+1}: {...item, dislike: item.dislike+1}
    } else if(isArrayAndHasLength(item.reply)){
      return {...item, reply: updateLikeOrDislike(item.reply, id, isLike)}
    } else return item
  })
  return copy
}