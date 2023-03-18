import styled from "styled-components";
import {motion} from "framer-motion";


export const Context = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 20px 20px 20px;
`;

export const ContentWrapper = styled(motion.div)`
  width: 100%;
  max-width: 500px;
`;