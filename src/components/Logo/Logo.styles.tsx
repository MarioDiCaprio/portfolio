import {styled} from "@mui/material";


export const StyledSvg = styled('svg')`
  &:hover {
    path {
      fill: rgba(29, 255, 202, 0.1);
    }
  }
`;

export const Hexagon = styled('path')<{ borderless?: boolean }>`
  fill: ${props => props.theme.palette.background.default};
  stroke: ${props => props.theme.palette.primary.light};
  stroke-width: ${props => props.borderless? 0 : 5};
  transition: 0.3s;
`;

export const Letter = styled('text')`
  font-size: 40px;
  font-family: "Roboto Slab", serif;
  fill: ${props => props.theme.palette.primary.light};
  stroke-width:0;
  stroke-linejoin: round;
  stroke-linecap: round;
  text-anchor: middle;
  dominant-baseline: central;
  user-select: none;
`;
