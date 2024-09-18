import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Steel = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 15 15"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M.001 7.51a.01.01 0 0 1 0-.012l3.772-6.444a.011.011 0 0 1 .01-.006h7.476c.003 0 .007.002.01.006l3.73 6.444a.01.01 0 0 1 0 .011l-3.73 6.437a.011.011 0 0 1-.01.006H3.783a.011.011 0 0 1-.01-.006L.001 7.51Zm10.974-.01a3.474 3.474 0 1 1-6.948 0 3.474 3.474 0 0 1 6.948 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Steel;
