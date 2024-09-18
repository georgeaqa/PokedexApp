import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const Poison = (props: SvgProps) => (
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
        d="M12.534 11.527C14.049 10.316 15 8.566 15 6.62 15 2.964 11.642 0 7.5 0 3.358 0 0 2.964 0 6.62c0 1.875.884 3.569 2.304 4.774a3.45 3.45 0 0 0-.133.958c0 1.463.884 2.648 1.974 2.648.708 0 1.33-.5 1.677-1.252C6.171 14.5 6.792 15 7.5 15c.646 0 1.219-.416 1.579-1.059.36.643.933 1.059 1.579 1.059 1.09 0 1.974-1.185 1.974-2.648 0-.288-.035-.566-.098-.825Zm-.692-4.776c0 1.856-1.988 3.36-4.44 3.36-2.453 0-4.441-1.504-4.441-3.36 0-1.856 1.988-3.36 4.44-3.36 2.453 0 4.441 1.504 4.441 3.36Z"
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
export default Poison;
