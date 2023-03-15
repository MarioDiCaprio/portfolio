import styled from "styled-components";
import {motion} from "framer-motion";


export const Mask = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1200;
  background: rgba(17, 34, 64, 0.5);
  touch-action: none;
`;

export const Root = styled(motion.div)`
  width: fit-content;
  min-width: 60vw;
  height: 100vh;
  padding: 50px 10px 50px 10px;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  background: #112240;
  z-index: 1202;
`;