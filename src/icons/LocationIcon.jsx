import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={13} cy={13} r={13} fill="#0373F3" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.042 12.019c0-2.684 2.242-4.852 4.954-4.852 2.72 0 4.962 2.168 4.962 4.852 0 1.352-.491 2.607-1.3 3.671a12.87 12.87 0 01-3.233 2.999c-.284.185-.54.2-.85 0a12.624 12.624 0 01-3.232-2.999c-.81-1.064-1.301-2.32-1.301-3.671zm3.321.15c0 .9.734 1.607 1.633 1.607.9 0 1.64-.707 1.64-1.606 0-.892-.74-1.633-1.64-1.633-.9 0-1.633.74-1.633 1.633z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
