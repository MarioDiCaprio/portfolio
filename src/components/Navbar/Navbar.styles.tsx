import styled from "styled-components";
import {theme} from "../../theme";
import {motion} from "framer-motion";


export const Context = styled.div<{ elevated: boolean, hidden: boolean }>`
  width: 100vw;
  height: ${props => props.elevated ? 75 : 100}px;
  padding: 5px 100px 5px 100px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(10, 25, 47, 0.5);
  backdrop-filter: blur(10px);
  box-shadow: ${props => props.elevated? '5px 5px 20px rgba(0, 0, 0, 0.22)' : 'none'};
  transform: ${props => props.hidden? 'translateY(-100px)' : 'none'};
  z-index: 1199;
  transition: 0.3s;
  @media (max-width: ${theme.breakpoints.md}px) {
    padding: 5px 20px 5px 20px;
  }
`;

export const LogoWrapper = styled(motion.div)`
  max-width: 50px;
  max-height: 50px;
`;

export const Links = styled.div`
  display: flex;
  gap: 30px;
  * {
    cursor: pointer;
  }
`;

export const MenuButtonWrapper = styled(motion.div)`
  color: ${theme.palette.seaGreen};
  font-size: 30px;
  cursor: pointer;
  z-index: 999999999;
`;