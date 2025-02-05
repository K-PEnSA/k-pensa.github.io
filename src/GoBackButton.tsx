// GoBackButton.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const GoBackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-20 left-4  text-gray-500 font-semibold py-2 px-4 hover:text-pensa-blue-70 flex items-center justify-center"
    >
      <span className="text-xl">&larr;</span>
    </button>
  );
};

export default GoBackButton;
