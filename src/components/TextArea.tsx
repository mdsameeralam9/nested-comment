import type { TextAreaProps } from "../types";

const TextArea: React.FC<TextAreaProps> = ({ value, onChange, placeholder }) => {
  return (
    <textarea
      value={value}
      className="w-[80%] border-2 pl-3 bg-white"
      rows={2}
      cols={50}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default TextArea;
