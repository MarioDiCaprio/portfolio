import styled from "styled-components";
import {theme} from "../../theme";


export const ContentWrapper = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;

export const Prefix = styled.div`
  color: ${theme.palette.seaGreen};
  display: flex;
  font-size: 13px;
  font-family: 'Source Code Pro', monospace;
`

export const Title = styled.div`
  display: flex;
  font-size: 13px;
  font-family: 'Source Code Pro', monospace;
  color: ${theme.palette.lavenderBlue};
  transition: 0.5s;
  &:hover {
    color: ${theme.palette.seaGreen};
    transition: 0.5s;
  }
`;