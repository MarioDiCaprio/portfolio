import styled from "styled-components";
import {theme} from "../../theme";


export const Context = styled.div`
  width: 100%;
  text-align: center;
  font-family: "Source Code Pro", monospace;
  font-size: small;
  margin-top: 50px;
  margin-bottom: 30px;
  span {
    color: ${theme.palette.seaGreen};
    cursor: pointer;
  }
`;