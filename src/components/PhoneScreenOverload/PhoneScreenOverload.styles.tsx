import {styled} from "@mui/material";

export const Context = styled('div')`
  position: absolute;
  left: 24.22%;
  top: 10.07%;
  width: 51.49%;
  height:  67.73%;
`;

export const Content = styled('div')`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 15px;
  color: ${props => props.theme.palette.text.primary};
`;

export const Message = styled('div')`
  width: fit-content;
  max-width: 80%;
  padding: 10px;
  color: white;
  background: #4646ff;
  border-radius: 14px;
`;