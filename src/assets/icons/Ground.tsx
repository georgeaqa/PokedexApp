import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Ground = (props: SvgProps) => (
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
      d="M3.304 12.895a.006.006 0 0 1-.006-.008l3.83-10.82c0-.003.003-.005.005-.005h4.088c.003 0 .005.002.006.004L15 12.887a.006.006 0 0 1-.006.008H3.304Zm-3.298.043A.006.006 0 0 1 0 12.93l2.852-7.614c.001-.002.003-.004.006-.004h2.478c.004 0 .006.004.005.008l-2.758 7.614a.006.006 0 0 1-.005.004H.006Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Ground;
