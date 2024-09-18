import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const Fairy = (props: SvgProps) => (
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
        d="m3.01 11.894 2.406-.697 2.078 3.8c.002.004.01.004.012 0l2.078-3.8 2.406.697a.007.007 0 0 0 .01-.009L11.3 9.527l3.695-2.02a.007.007 0 0 0 0-.013l-3.725-2.038.728-2.461a.007.007 0 0 0-.009-.009L9.528 3.7 7.506.004a.007.007 0 0 0-.012 0L5.472 3.7 3.01 2.986a.007.007 0 0 0-.01.009l.73 2.461L.003 7.494a.007.007 0 0 0 0 .012l3.695 2.021L3 11.885a.007.007 0 0 0 .009.01Zm1.867-4.368 1.704.932.932 1.705c.003.005.01.005.013 0l.932-1.705 1.705-.932a.007.007 0 0 0 0-.013l-1.705-.932-.932-1.704a.007.007 0 0 0-.013 0L6.581 6.58l-1.704.932a.007.007 0 0 0 0 .013Z"
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
export default Fairy;
