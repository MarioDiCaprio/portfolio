import {styled} from "@mui/material";


export const ContentWrapper = styled('div')`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;

export const Prefix = styled('div')`
  color: ${props => props.theme.palette.primary.main};
  display: flex;
  font-size: 13px;
  font-family: 'Source Code Pro', monospace;
`

export const Title = styled('div')`
  display: flex;
  font-size: 13px;
  font-family: 'Source Code Pro', monospace;
  color: ${props => props.theme.palette.text.primary};
  transition: 0.5s;
  &:hover {
    color: ${props => props.theme.palette.primary.main};
    transition: 0.5s;
  }
`;