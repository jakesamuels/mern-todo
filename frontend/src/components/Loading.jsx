import { CSSProperties } from "react";
import { PuffLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const Loading = ({ bool }) => {
  return (
    <div className="sweet-loading">
      <PuffLoader
        color="#000"
        loading={bool}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
