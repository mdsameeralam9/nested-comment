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

interface CommonComment {
  handleReplyComment: (newData: ReplyInterface) => void;
  handleLikeOrDislike: (id: number, isLike: boolean) => void;
  handleDelete: (id: number) => void;
}

export interface CommentComponentProps extends CommonComment {
  commentData: CommentDataInterface[];
}

export interface SingleCommentProps extends CommonComment  {
  data: CommentDataInterface;
}

export interface TextAreaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

export interface ButtonProps {
  label?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}
