import {styled} from "@mui/material";


export const Context = styled('img')`
  width: 100vw;
  overflow-x: hidden;
  overflow-y: visible;
  z-index: -9999;
  position: absolute;
  top: 0;
  right: 0;
  pointer-events: none;
  user-select: none;
  @media (max-width: 1150px) {
    display: none;
  }
`;