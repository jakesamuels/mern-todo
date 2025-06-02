import { CSSProperties } from "react";
import { BeatLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const DotLoader = ({ bool }) => {
  return (
    <div className="sweet-loading">
      <BeatLoader
        color="#000"
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
