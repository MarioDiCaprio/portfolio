import styled from "styled-components";
import {motion} from "framer-motion";


export const Context = styled.div`
  overflow-x: hidden;
  overflow-y: visible;
  letter-spacing: -2px;
  line-height: 0.8;
  margin: 0;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
`;

export const Scroller = styled(motion.div)`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 64px;
  display: flex;
  white-space: nowrap;
  flex-wrap: nowrap;
`;

export const Child = styled.span`
  display: block;
  margin-right: 30px;
`;