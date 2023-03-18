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
    margin-top: 130px;
    gap: 20px;
  }
`;

export const ContentWrapper = styled.div`
  
`;

export const InterestList = styled(Text)`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
`;

export const Interest = styled(motion.span)`
  margin: 2px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ChessWheelWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 70%;
  max-width: 400px;
  padding: 30px;
  img {
    width: 100%;
    object-fit: contain;
  }
  @media(max-width: ${theme.breakpoints.md}px) {
  }
`;

export const BulletPoint = styled.span`
  color: ${theme.palette.seaGreen};
  margin-right: 10px;
`;

export const ParallaxWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0 13px 0;
  margin: 30px 0 30px 0;
`;

export const ParallaxContent = styled.span`
  color: ${theme.palette.seaGreen};
  font-family: "Plaster", serif;
  font-size: 3rem;
  user-select: none;
`;
