import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const BackArrow = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    color={props.color}
    fill="none"
    {...props}
  >
    <Path
      d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
      stroke="currentColor"
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default BackArrow;
