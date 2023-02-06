import React from "react";
import { Svg, Path, G, Defs, Rect, ClipPath } from "react-native-svg";

const RazoPay = () => {
  return (
    <Svg
      width="46"
      height="52"
      viewBox="0 0 46 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_1916_5795)">
        <Path
          d="M19.7333 16.7344L17.269 25.8691L31.3741 16.6824L22.1491 51.3459L31.5181 51.3538L45.146 0.154297"
          fill="#3395FF"
        />
        <Path
          d="M4.5519 36.7813L0.671631 51.354H19.8743L27.7318 21.7092L4.5519 36.7813Z"
          fill="#072654"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1916_5795">
          <Rect width="46" height="52" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default RazoPay;
