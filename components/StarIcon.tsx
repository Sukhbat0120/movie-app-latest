import React from "react";

interface StarIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  fill?: string;
}

const StarIcon: React.FC<StarIconProps> = ({
  width = 16,
  height = 15,
  fill = "#FDE047",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16 15"
    fill="none"
    {...props}
  >
    <path
      d="M8.00001 1.33337L10.06 5.50671L14.6667 6.18004L11.3333 9.42671L12.12 14.0134L8.00001 11.8467L3.88001 14.0134L4.66668 9.42671L1.33334 6.18004L5.94001 5.50671L8.00001 1.33337Z"
      fill={fill}
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default StarIcon;
