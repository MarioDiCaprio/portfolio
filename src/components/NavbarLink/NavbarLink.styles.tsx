import {styled} from "@mui/material";
import {UnderlinedLink} from "../../styles/presets.styles";


export const ContentWrapper = styled(UnderlinedLink.withComponent('div'))`
  display: flex;
  gap: 10px;
  cursor: pointer;
  font-size: 13px;
  font-family: 'Source Code Pro', monospace;
  &:hover * {
    color: ${props => props.theme.palette.primary.main};
    transition: 0.5s;
  }
`;

export const Prefix = styled('div')`
  color: ${props => props.theme.palette.primary.main};
  display: flex;
  transition: 0.5s;
`

export const Title = styled('div')`
  display: flex;
  color: ${props => props.theme.palette.text.primary};
  transition: 0.5s;
`;