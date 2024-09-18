import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const Dark = (props: SvgProps) => (
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
        d="M6.73 13.267A5.73 5.73 0 1 0 6.976 1.91c1.57 1.19 2.607 3.25 2.607 5.591 0 2.462-1.147 4.613-2.853 5.767ZM7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
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
export default Dark;
