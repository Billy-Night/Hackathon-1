import { useState } from "react";
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: black;
`;

const Spinner = () => {
  let [loading, setLoading] = useState(true);
//   let [color, setColor] = useState("#0000");

  return (
    <div className="sweet-loading">
        <div onClick={() => setLoading(!loading)}>Loading your results...</div>
        <br />
      {/* <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}    
      <BeatLoader color="#000000" loading={loading} css={override} size={30} />
      <br />
    </div>
  );
}

export default Spinner;
