import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

const SearchIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      stroke="#969aa6"
      d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667zM14 14l-2.9-2.9"
    />
  </Svg>
);

const OkeyIcon = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m7 12.5 3.75 3.5L17 9"
      stroke="#23c00a"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Z"
      stroke="#23c00a"
      strokeWidth={2}
    />
  </Svg>
);

const CancelIcon = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m15 9-6 6m0-6 6 6"
      stroke="#969AA6"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Z"
      stroke="#969AA6"
      strokeWidth={2}
    />
  </Svg>
);

const DangerIcon = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m19.779 19.777-.002.002A10.963 10.963 0 0 1 12.001 23H12a10.965 10.965 0 0 1-7.776-3.221l-.002-.002A10.963 10.963 0 0 1 1 12.001V12a10.963 10.963 0 0 1 3.221-7.776l.002-.002A10.963 10.963 0 0 1 11.999 1H12a10.962 10.962 0 0 1 7.776 3.221l.002.002A10.963 10.963 0 0 1 23 11.999V12a10.961 10.961 0 0 1-3.221 7.776Z"
      stroke="#fe4742"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 18.3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      fill="#fe4742"
    />
    <Path
      d="M12 6.75v6"
      stroke="#fe4742"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const InfoIcon = (props) => (
  <Svg
    width={16}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M8 14.9A6.4 6.4 0 1 0 8 2.1a6.4 6.4 0 0 0 0 12.8Zm0 1.6a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm-.8-8.8v4.8h1.6V7.7H7.2Zm0-3.2h1.6v1.6H7.2V4.5Z"
        fill="#969aa6"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(0 .5)" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

const LinkIcon = (props) => (
  <Svg
    width={16}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G
      clipPath="url(#a)"
      stroke="#6CB7F5"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M12 9.167v4a1.334 1.334 0 0 1-1.333 1.333H3.333A1.334 1.334 0 0 1 2 13.167V5.833A1.333 1.333 0 0 1 3.333 4.5h4M10 2.5h4v4M6.667 9.833 14 2.5" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(0 .5)" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export { SearchIcon, OkeyIcon, CancelIcon, DangerIcon, InfoIcon, LinkIcon };
