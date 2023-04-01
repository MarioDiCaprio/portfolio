import {styled} from "@mui/material";
import {motion} from "framer-motion";


export const Context = styled('div')<{ elevated: boolean, hidden: boolean }>`
  width: 100vw;
  height: ${props => props.elevated ? 75 : 100}px;
  padding: 5px 50px 5px 50px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.elevated? 'rgba(4,15,22,0.22)' : 'transparent'};
  backdrop-filter: ${props => props.elevated? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.elevated? '5px 5px 20px rgba(0, 0, 0, 0.22)' : 'none'};
  transform: ${props => props.hidden? 'translateY(-100px)' : 'none'};
  z-index: 1199;
  transition: 0.3s;
  @media (max-width: ${props => props.theme.breakpoints.values.md}px) {
    padding: 5px 20px 5px 20px;
  }
`;

export const Links = styled('div')`
  display: flex;
  gap: 30px;
  * {
    cursor: pointer;
  }
`;

export const MenuButtonWrapper = styled(motion.div)`
  color: ${props => props.theme.palette.primary.main};
  font-size: 30px;
  cursor: pointer;
  z-index: 999999999;
`;

export const LogoWrapper = styled(motion.div)`

`;