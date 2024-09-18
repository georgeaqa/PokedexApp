import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Rock = (props: SvgProps) => (
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
      d="M11.582 7.184a.005.005 0 0 1-.001-.004l.955-5.569c0-.002.002-.004.005-.004h.302c.002 0 .005.002.005.004L15 8.423c0 .002 0 .004-.002.006l-1.586 1.238a.005.005 0 0 1-.008 0l-1.822-2.483ZM0 10.876c0 .002.001.004.004.005l3.27 1.069h.004l7.31-5.047a.005.005 0 0 0 .002-.004l.784-5.259a.005.005 0 0 0-.005-.006H4.894c-.001 0-.003 0-.004.002L.001 7.534A.005.005 0 0 0 0 7.537v3.339Zm4.636 1.346 3.573 1.17h.005l4.253-3.051a.005.005 0 0 0 .001-.007L10.874 7.96a.005.005 0 0 0-.008-.001l-6.23 4.262Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Rock;
