import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Electric = (props: SvgProps) => (
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
      d="M4.455.017A.013.013 0 0 1 4.468 0h5.286c.005 0 .01.004.012.01l2.428 7.844a.013.013 0 0 1-.012.016h-3.52a.006.006 0 0 0-.006.008l2.019 7.105c.003.014-.015.023-.023.012L2.808 4.565a.013.013 0 0 1 .01-.022h3.195a.006.006 0 0 0 .006-.008L4.455.017Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Electric;
