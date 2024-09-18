import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const Fighting = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 15 15"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M2.587 1.247A1.655 1.655 0 0 1 5.577.75h.483a1.655 1.655 0 0 1 2.705.5h.406a1.655 1.655 0 0 1 2.395.75h1.1c.01 0 .02.003.027.007A1.655 1.655 0 0 1 14.5 3.655v5.05c0 .03 0 .061-.002.091C14.398 12.238 11.303 15 7.5 15c-3.866 0-7-2.854-7-6.375 0-1.7.73-3.244 1.92-4.386-.002 1.656.026 3.37.155 3.34.345-.079.075-5.21.012-6.332Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h15v15H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Fighting;
