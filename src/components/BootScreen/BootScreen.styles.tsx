import {styled} from "@mui/material";
import {motion} from "framer-motion";


export const Context = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Video = styled(motion.video)`
  width: 300px;
  height: 300px;
  max-width: 100%;
  max-height: 100%;
`;