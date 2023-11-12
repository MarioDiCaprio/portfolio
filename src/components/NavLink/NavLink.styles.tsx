import {styled} from "@mui/material";
import {UnderlinedLink} from "../../styles/presets.styles";


export const Context = styled(UnderlinedLink.withComponent('span'))<{ isActive?: boolean }>`
  color: white !important;
  cursor: pointer;
  padding: 5px;
  font-weight: ${props => props.isActive? 800 : 400};
  &::after {
    background: currentColor;
    transition: transform 0.35s ease-in-out;
  }
`;