import { CSSProperties, useState } from "react";
import { BeatLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  //   borderColor: "#dc3545",
};

const DotLoader = ({ bool }) => {
  const [color, setColor] = useState("#000");

  return (
    <div className="sweet-loading">
      <BeatLoader
        color={color}
        loading={bool}
        cssOverride={override}
        size={8}
        aria-label="Loading Dots"
        data-testid="loader"
      />
    </div>
  );
};

export default DotLoader;
