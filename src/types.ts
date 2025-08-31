export interface CommentDataInterface {
   id: number;
   comment: string;
   reply?: CommentDataInterface[] 
}

export interface CommentComponentProps {
  commentData: CommentDataInterface[];
  handleReplyComment: (newData: {id: number, comment:string}) => void;
}

export interface ReplyInterface {
  parentId: number;
  comment: string
}

export interface SingleCommentProps {
  data: CommentDataInterface;
  handleReplyComment: (newData: ReplyInterface) => void;
}



