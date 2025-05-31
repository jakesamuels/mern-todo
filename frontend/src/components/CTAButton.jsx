import React from "react";

const CTAButton = ({ children, className, handler, bgColor, disabled }) => {
  return (
    <button
      onClick={handler}
      className={`${className} btn__cta`}
      style={{
        background: bgColor,
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CTAButton;
