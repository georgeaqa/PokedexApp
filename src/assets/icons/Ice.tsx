import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const Ice = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 15 15"
    {...props}
  >
    <G fill="#fff" clipPath="url(#a)">
      <Path d="M7.277 2.79 3.55.945l.113 4.124L7.18 6.811l.096-4.02ZM11.413 5.12 11.365.961 7.742 2.935l.045 3.925 3.626-1.74ZM11.41 9.566 15 7.513l-3.591-1.89-3.59 1.886 3.592 2.057ZM7.18 7.513 3.592 9.566 0 7.509l3.59-1.885 3.59 1.889ZM11.467 14.017 7.74 12.172l.095-4.02 3.518 1.741.113 4.124ZM3.632 9.898l.048 4.157 3.623-1.973-.045-3.925-3.626 1.74Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h15v15H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Ice;
