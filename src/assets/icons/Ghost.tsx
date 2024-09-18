import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const Ghost = (props: SvgProps) => (
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
        d="M10.81 14.948c-1.354.07-2.903.07-3.43 0-4.105-.54-7.38-3.542-7.38-7.6S3.358 0 7.5 0C11.642 0 15 3.29 15 7.348a7.238 7.238 0 0 1-1.92 4.91c-.324.353.12.6.572.853.444.246.894.497.632.855-.288.395-1.85.899-3.475.982ZM6.444 6.43a1.16 1.16 0 0 1-1.172 1.148A1.16 1.16 0 0 1 4.102 6.43c0-.425.236-.796.586-.995.02.553.475.995 1.033.995h.724Zm3.632-.995c-.02.553-.474.995-1.032.995H8.32a1.16 1.16 0 0 0 1.172 1.148 1.16 1.16 0 0 0 1.172-1.148c0-.425-.236-.796-.587-.995Z"
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
export default Ghost;
