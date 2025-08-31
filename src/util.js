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
