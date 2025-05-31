import React from "react";

const CTAButton = ({ children, className, handler, bgColor }) => {
  return (
    <button
      onClick={handler}
      className={`${className} btn__cta`}
      style={{
        background: bgColor,
      }}
    >
      {children}
    </button>
  );
};

export default CTAButton;
