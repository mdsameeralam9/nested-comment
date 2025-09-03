export interface CommentDataInterface {
  id: number;
  comment: string;
  reply?: CommentDataInterface[] | undefined;
  date: Date;
  like: number;
  dislike: number;
}

export interface ReplyInterface {
  parentId: number;
  comment: string;
}

export interface CommentComponentProps {
  commentData: CommentDataInterface[];
  handleReplyComment: (newData: ReplyInterface) => void;
  handleLikeOrDislike: (id: number, isLike: boolean) => void;
}

export interface SingleCommentProps {
  data: CommentDataInterface;
  handleReplyComment: (newData: ReplyInterface) => void;
  handleLikeOrDislike: (id: number, isLike: boolean) => void;
}

export interface TextAreaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

export interface ButtonProps {
  label?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}
