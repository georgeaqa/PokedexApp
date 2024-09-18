import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Water = (props: SvgProps) => (
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
      d="M12.366 10.152C12.366 12.83 10.188 15 7.5 15c-2.687 0-4.866-2.17-4.866-4.848C2.634 7.548 7.237.397 7.489.007c.006-.01.016-.01.022 0 .252.39 4.855 7.541 4.855 10.145ZM6.69 13.446c-2.47-.54-2.047-3.276-2.047-3.276s.674 1.652 2.31 2.186c1.637.535 3.614-.25 3.614-.25s-1.408 1.88-3.877 1.34Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Water;
