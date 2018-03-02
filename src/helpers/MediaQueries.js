import { css } from "react-emotion";

export const breakpoints = {
  xsmall: 400,
  small: 500,
  medium: 650,
  large: 960,
  xLarge: 1024
};

export const queries = Object.keys(breakpoints).reduce((accumulator, label) => {
  if (typeof breakpoints[label] === "string") {
    accumulator[label] = (...args) =>
      css`
        @media (${breakpoints[label]}) {
          ${css(...args)};
        }
      `;
  } else {
    accumulator[label] = (...args) =>
      css`
        @media screen and (min-width: ${breakpoints[label]}px) {
          ${css(...args)};
        }
      `;
  }

  return accumulator;
}, {});
