import { CSSProperties } from "react";
import { BounceLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const BouncingLoader = ({ bool }) => {
  return (
    <BounceLoader
      color="#000"
      loading={bool}
      cssOverride={override}
      size={150}
      speedMultiplier={0.75}
      aria-label="Loading Dots"
      data-testid="loader"
    />
  );
};

export default BouncingLoader;
