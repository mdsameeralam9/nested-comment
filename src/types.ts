export interface CommentDataInterface {
  id: number;
  comment: string;
  reply?: CommentDataInterface[];
}

export interface ReplyInterface {
  parentId: number;
  comment: string;
}

export interface CommentComponentProps {
  commentData: CommentDataInterface[];
  handleReplyComment: (newData: ReplyInterface) => void;
}

export interface SingleCommentProps {
  data: CommentDataInterface;
  handleReplyComment: (newData: ReplyInterface) => void;
}

export interface TextAreaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}
