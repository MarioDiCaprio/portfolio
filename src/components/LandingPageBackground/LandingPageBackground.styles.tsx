import {styled} from "@mui/material";
import {motion} from "framer-motion";


export const Context = styled(motion.video)`
  width: 100vw;
  height: 100%;
  margin-top: 50px;
  padding-left: 20vw;
  overflow-x: hidden;
  overflow-y: visible;
  z-index: -9999;
  position: absolute;
  top: 0;
  right: 0;
  pointer-events: none;
  user-select: none;
  border-bottom: 1px solid ${props => props.theme.palette.divider};
  @media (max-width: 1150px) {
    display: none;
  }
`;