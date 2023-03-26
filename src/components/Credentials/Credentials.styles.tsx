import {styled} from "@mui/material";


export const Context = styled('div')`
  width: 100%;
  text-align: center;
  font-family: "Source Code Pro", monospace;
  font-size: small;
  margin-top: 50px;
  margin-bottom: 30px;
  a {
    color: ${props => props.theme.palette.primary.main};
    cursor: pointer;
  }
`;