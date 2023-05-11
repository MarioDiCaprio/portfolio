import {styled} from "@mui/material";
import {motion} from "framer-motion";


export const Content = styled('div')`
  padding: 100px 0 100px 0;
  display: flex;
  justify-content: space-around;
  @media (max-width: 1130px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CircleContainer = styled(motion.div)`
  width: 475px;
  height: 475px;
  overflow: visible;
  position: relative;
  @media (max-width: 1245px) {
    width: 350px;
    height: 350px;
  }
  @media (max-width: 1130px) {
    margin-bottom: 50px;
  }
  @media (max-width: 485px) {
    width: 300px;
    height: 300px;
  }
`;

export const InterestElement = styled(motion.img)`
  position: absolute;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: ${props => props.theme.palette.background.default};
  user-select: none;
  cursor: pointer;
`;

export const MainContainer = styled('div')`
  width: calc(100% - 475px);
  padding-left: 100px;
  @media (max-width: 1245px) {
    padding-left: 50px;
  }
  @media (max-width: 1130px) {
    padding: 0;
    width: 100%;
    max-width: 500px;
  }
`;

export const Title = styled('h2')`
  font-size: clamp(20px, 8vw, 3rem);
  font-weight: 800;
`;

export const InterestContainer = styled('div')<{ display?: string }>`
  display: ${props => props.display};
`;

export const InterestTitle = styled('h4')`
  margin: 0 0 10px 0;
  font-size: 2rem;
`;

export const InterestDescription = styled('div')`
  font-size: 1.5rem;
  line-height: 2.6rem;
  font-weight: 300;
  color: ${props => props.theme.palette.text.secondary};
`;

export const ButtonContainer = styled('div')`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;