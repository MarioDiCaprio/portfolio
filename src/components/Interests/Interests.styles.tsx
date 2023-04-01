import {styled} from "@mui/material";
import {motion} from "framer-motion";
import {Section, Text} from "../../styles/presets.styles";


export const Context = styled(Section)`
  padding: 5% 15% 5% 15%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 100px;
  margin-bottom: 50px;
  @media(max-width: ${props => props.theme.breakpoints.values.md}px) {
    flex-direction: column-reverse;
    padding: 50px 20px 50px 20px;
    margin-top: 130px;
    gap: 20px;
  }
`;

export const ContentWrapper = styled('div')`
  
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

export const ChessWheelWrapper = styled('div')`
  overflow: hidden;
  position: relative;
  width: 70%;
  max-width: 400px;
  padding: 30px;
  img {
    width: 100%;
    object-fit: contain;
  }
  @media(max-width: ${props => props.theme.breakpoints.values.md}px) {
  }
`;

export const BulletPoint = styled('span')`
  color: ${props => props.theme.palette.primary.main};
  margin-right: 10px;
`;
