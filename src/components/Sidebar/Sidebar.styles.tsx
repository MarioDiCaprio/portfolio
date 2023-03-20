import {styled} from "@mui/material";


export const Top = styled('div')`
  width: 100%;
  height: 75px;
  position: absolute;
  font-size: 30px;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  padding: 5px 10px 5px 10px;
`;

export const Content = styled('div')`
  width: fit-content;
  min-width: 60vw;
  height: 100vh;
  padding: 50px 10px 50px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  background: ${props => props.theme.palette.background.paper};
`;