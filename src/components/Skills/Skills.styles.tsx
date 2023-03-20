import {styled} from "@mui/material";
import {motion} from "framer-motion";
import {PrimaryHeadline, SecondaryHeadline} from "../../styles/presets.styles";


export const Context = styled(motion.div)`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  padding: 120px 30% 7% 30%;
  @media (max-width: ${props => props.theme.breakpoints.values.md}px) {
    padding: 90px 20px 20px 20px;
  }
  @media (max-width: 500px) {
    margin-top: 100px;
  }
`;

export const Title = styled(PrimaryHeadline)`
  text-align: center;
  margin: 0;
`;

export const Subtitle = styled(SecondaryHeadline)`
  text-align: center;
  margin: 0 0 80px 0;
  @media (max-width: ${props => props.theme.breakpoints.values.md}px) {
    margin: 0;
  }
`;

export const Arrow = styled('div')`
  width: 100%;
  position: relative;
  margin-bottom: 200px;
  @media (max-width: ${props => props.theme.breakpoints.values.md}px) {
    margin-bottom: 0;
  }
`;

export const ArrowBody = styled(motion.div)`
  width: 50px;
  height: 200px;
  background: ${props => props.theme.palette.primary.main};
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: calc(50% - 50px / 2);
  @media(max-width: ${props => props.theme.breakpoints.values.md}px) {
    display: none;
  }
`;

export const ArrowHead = styled(motion.svg)`
  width: 120px;
  height: 120px;
  position: absolute;
  left: calc(50% - 120px / 2);
  transform: scale(-1);
  path {
    fill: ${props => props.theme.palette.background.default};
    stroke: ${props => props.theme.palette.primary.main};
    stroke-width: 3px;
  }
  @media(max-width: ${props => props.theme.breakpoints.values.md}px) {
    display: none;
  }
`;

export const CardWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 50px;
  @media(max-width: ${props => props.theme.breakpoints.values.md}px) {
    align-items: center
  }
`;