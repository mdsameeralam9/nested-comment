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
    dislike: 0,
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
    like: 0,
    dislike: 0,
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

export const isArrayAndHasLength = (arr) =>
  Array.isArray(arr) && arr.length > 0;

export const updateLikeOrDislike = (data, id, isLike) => {
  return data.map((item) => {
    if (item.id === id) {
      return isLike
        ? { ...item, like: item.like + 1 }
        : { ...item, dislike: item.dislike + 1 };
    } else if (isArrayAndHasLength(item.reply)) {
      return { ...item, reply: updateLikeOrDislike(item.reply, id, isLike) };
    } else return item;
  });
};

// sortBy: "new" | "old" | "like" | "dislike"
export const sortComment = (data, sortBy) => {
  const arr = Array.isArray(data) ? [...data] : [];
  const t = (d) => new Date(d).getTime(); // convert ISO string to ms since epoch

  switch (sortBy) {
    case "new": // newest first
      return arr.sort((a, b) => t(b.date) - t(a.date));
    case "old": // oldest first
      return arr.sort((a, b) => t(a.date) - t(b.date));
    case "like": // most likes first
      return arr.sort((a, b) => (b.like || 0) - (a.like || 0));
    case "dislike": // most dislikes first
      return arr.sort((a, b) => (b.dislike || 0) - (a.dislike || 0));
    default:
      return arr;
  }
};

export const deleteComment = (data, id) => {
  if (!Array.isArray(data)) return [];

  return data
    // keep only items whose id does not match
    .filter(item => item?.id !== id)
    // for remaining items, rebuild reply recursively
    .map(item => {
      const replies = Array.isArray(item.reply) && item.reply.length
        ? deleteComment(item.reply, id)
        : item.reply;
      return { ...item, reply: replies };
    });
};
