import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const Dragon = (props: SvgProps) => (
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
        d="M8.228 7.467c.101-.062.188-.192.257-.336a2.48 2.48 0 0 1 1.559 2.29c0 1.369-1.136 2.48-2.536 2.48a2.562 2.562 0 0 1-1.53-.503c-.14-.066-.255-.13-.349-.182-.145-.08-.24-.133-.3-.125-.175.024-.125.185-.079.331.032.1.061.192.016.23-.047.04-.2-.106-.38-.277-.243-.232-.535-.51-.672-.426-.109.066-.003.245.126.464l.01.016c.054.093.117.187.175.273.117.175.212.316.164.34-.057.029-.455-.24-.79-.613-.13-.144-.255-.3-.372-.445-.255-.317-.467-.582-.587-.55-.143.037-.034.333.125.618.075.133.162.27.238.387.119.182.208.32.176.338-.044.023-.43-.354-.693-.828a8.827 8.827 0 0 1-.392-.846c-.115-.273-.2-.477-.257-.497-.196-.072-.196.327-.117.903.01.075.025.154.044.234C2.825 13.207 5.164 15 7.931 15c3.384 0 6.127-2.683 6.127-5.993 0-3.15-2.485-5.733-5.642-5.975.004-.148.081-.443.081-.443s.558-1.348.587-1.637L9.091.89C9.125.58 9.19 0 8.69 0c-.265 0-.389.198-.53.424a2.72 2.72 0 0 1-.18.264c-.494.617-1.325 1.388-1.796 1.798a37.032 37.032 0 0 1-2.543 1.997c-.26.19-.435.317-.489.37-.408.398-1.87 3.036-1.87 3.036s-.474.847-.305 1.019c.168.171.573.132.573.132S7 7.79 7.486 7.692a7.7 7.7 0 0 1 .296-.054c.193-.032.227-.038.446-.17ZM4.376 5.861c-.292.278-.777.942-.777.942s.9.055 1.397-.417.383-1.276.383-1.276-.71.473-1.003.751Z"
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
export default Dragon;
