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
  stroke-width: ${props => props.borderless? 0 : 4};
  transition: 0.3s;
`;

export const Letter = styled('text')`
  font-size: 50px;
  font-family: aakar, serif;
  fill: ${props => props.theme.palette.primary.light};
  stroke-width:0;
  user-select: none;
`;