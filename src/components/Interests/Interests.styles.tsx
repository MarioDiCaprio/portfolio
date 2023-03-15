import styled from "styled-components";
import {motion} from "framer-motion";
import {theme} from "../../theme";
import {Text} from "../../styles/presets.styles";


export const Context = styled(motion.div)`
  width: 100vw;
  min-height: 100vh;
  padding: 5% 15% 5% 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 100px;
  @media(max-width: ${theme.breakpoints.md}px) {
    flex-direction: column-reverse;
    padding: 50px 20px 50px 20px;
  }
  @media(max-width: ${theme.breakpoints.sm}px) {
    flex-direction: column;
    padding: 50px 20px 50px 20px;
  }
`;

export const ContentWrapper = styled.div`
  
`;

export const InterestList = styled(Text)`
  display: flex;
  flex-direction: column;
`;

export const Interest = styled(motion.span)`
  margin: 2px;
`;

export const ChessWheelWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 70%;
  max-width: 400px;
  img {
    width: 100%;
    object-fit: contain;
  }
  @media(max-width: ${theme.breakpoints.md}px) {
    margin: 50px 0 50px 0;
  }
`;
