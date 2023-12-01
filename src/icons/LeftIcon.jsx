import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent({width = 28, height = 28}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M4.958 14.32h17.5M12.016 21.349L4.958 14.32l7.058-7.029"
        stroke="#200E32"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
