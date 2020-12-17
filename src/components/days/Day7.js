import React from "react";
import styled from "styled-components";
import { theme } from "../../style";

const DayWrapper = styled.div`
  background: ${theme.color.c4Dark};
  width: 100%;
  height: 100%;
`;

export const Day7 = () => {
  return (
    <DayWrapper>
      <svg width="100%" height="100%" viewBox="50 0 400 400">
        <g transform="matrix(-1, 0, 0, 1, 492.09024, -13.341083)">
          <path
            stroke="rgb(0,0,0)"
            strokeWidth="6px"
            fillOpacity="0"
            d="M 149.19 302.222 L 89.853 231.395 L 66.798 222.404"
            transform="matrix(0.916944, -0.399017, 0.399017, 0.916944, -95.697726, 64.878215)"
          />
          <path
            stroke="rgb(0,0,0)"
            strokeWidth="6px"
            fillOpacity="0"
            d="M 67.418 216.837 L 74.38 243.396"
            transform="matrix(0.916944, -0.399017, 0.399017, 0.916944, -85.931759, 47.402556)"
          />
        </g>
        <circle fill={theme.color.main} cx="287.123" cy="295.18" r="94.13" />
        <circle fill={theme.color.main} cx="276.102" cy="147.332" r="56.56" />
        <path
          stroke="red"
          strokeWidth="30px"
          d="M 234.918 202.358 C 265.483 202.358 309.052 212.607 322.505 200.696"
        />

        <path
          d="M 330.045 156.492 C 316.575 156.492 314.81 139.912 330.504 139.912 L 362.069 150.353"
          fill="orange"
        />
        <circle
          fill={theme.color.background}
          cx="308.004"
          cy="126.385"
          r="6.896"
        />
        <rect
          x="214.318"
          y="24.878"
          width="84.687"
          height="70.185"
          transform="matrix(0.87462, -0.484809, 0.484809, 0.87462, -13.224817, 154.093506)"
          strokeLinecap="round"
          strokeMiterlimit="18"
          fill={theme.color.background}
        />
        <path
          stroke={theme.color.background}
          strokeWidth="7px"
          d="M 206.784 112.914 L 310.344 112.914"
          transform="matrix(0.87462, -0.484809, 0.484809, 0.87462, -22.322982, 139.511325)"
        />
        <path
          stroke='red'
          strokeWidth="30px"
          d="M 262.124 242.311 C 280.381 242.311 306.406 236.189 314.441 243.303"
          transform="matrix(0, 1, -1, 0, 529.864906, -46.700096)"
        />
        <path
          stroke="rgba(0,0,0)"
          strokeWidth="6px"
          fillOpacity="0"
          d="M 225.361 288.298 L 166.024 217.471 L 142.969 208.48"
          transform="matrix(0.916944, -0.399017, 0.399017, 0.916944, -83.815325, 94.115253)"
        />
        <path
          stroke="rgba(0,0,0)"
          strokeWidth="6px"
          fillOpacity="0"
          d="M 143.589 202.913 L 150.551 229.472"
          transform="matrix(0.916944, -0.399017, 0.399017, 0.916944, -74.049354, 76.639596)"
        />
      </svg>
    </DayWrapper>
  );
};
