import styled from "styled-components";
import {theme} from "../../theme";


export const StyledSvg = styled.svg`
  &:hover {
    path {
      fill: rgba(29, 255, 202, 0.1);
    }
  }
`;

export const Hexagon = styled.path<{ borderless?: boolean }>`
  fill: ${theme.palette.maastrichtBlue};
  stroke: ${theme.palette.aquamarine};
  stroke-width: ${props => props.borderless? 0 : 4};
  transition: 0.3s;
`;

export const Letter = styled.text`
  font-size: 50px;
  font-family: aakar, serif;
  fill: ${theme.palette.aquamarine};
  stroke-width:0;
  user-select: none;
`;