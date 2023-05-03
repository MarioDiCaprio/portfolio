import {styled} from "@mui/material";
import {UnderlinedLink} from "../../styles/presets.styles";


export const Context = styled(UnderlinedLink.withComponent('span'))`
  cursor: pointer;
  color: currentColor;
  padding: 5px;
  &::after {
    background: currentColor;
    transition: transform 0.35s ease-in-out;
  }
`;