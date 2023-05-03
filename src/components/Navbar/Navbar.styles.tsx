import {styled} from "@mui/material";


export const Context = styled('div')`
  width: 100vw;
  height: 110px;
  padding: 0 20px 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled('div')`
  width: 100%;
  max-width: 1100px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.palette.primary.contrastText};
  font-weight: 500;
`;

export const LinksSection = styled('div')`
  display: flex;
  gap: 40px;
`;