import type React from "react";
import type { ButtonProps } from "../types";


const Button:React.FC<ButtonProps> = ({ label = "Submit", onClick, type='button' }) => {
  return (
    <button
      type={type}
      className="bg-blue-950 border-b-black py-0.5 px-8 cursor-pointer text-white"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
