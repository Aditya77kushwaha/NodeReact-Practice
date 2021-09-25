import React from "react";

const Button = ({ text, color }) => {
  return (
    <div>
      <button
        className="btn btn-block"
        style={{ backgroundColor: color, fontWeight:600 }}
        value="ADD"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
