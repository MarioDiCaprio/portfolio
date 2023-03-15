import styled from "styled-components";
import {motion} from "framer-motion";
import {theme} from "../../theme";
import {PrimaryHeadline, SecondaryHeadline} from "../../styles/presets.styles";


export const Context = styled(motion.div)`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  padding: 0 30% 7% 30%;
  @media (max-width: ${theme.breakpoints.md}px) {
    padding: 20px;
  }
`;

export const Title = styled(PrimaryHeadline)`
  text-align: center;
  margin: 0;
`;

export const Subtitle = styled(SecondaryHeadline)`
  text-align: center;
  margin: 0 0 80px 0;
`;

export const ArrowBody = styled(motion.svg)`
  line {
    stroke: ${theme.palette.seaGreen};
    stroke-width: 75px;
  }
  position: relative;
  left: calc(50% - 20px);
  max-height: 1px;
  @media(max-width: ${theme.breakpoints.md}px) {
    display: none;
  }
`;

export const ArrowHead = styled(motion.svg)`
  width: 120px;
  height: 120px;
  position: relative;
  left: calc(50% - 60px);
  transform: scale(-1);
  path {
    fill: ${theme.palette.maastrichtBlue};
    stroke: ${theme.palette.seaGreen};
    stroke-width: 3px;
  }
  @media(max-width: ${theme.breakpoints.md}px) {
    display: none;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 50px;
  @media(max-width: ${theme.breakpoints.md}px) {
    align-items: center
  }
`;