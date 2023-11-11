import {styled} from "@mui/material";
import {motion} from "framer-motion";


export const UnderlinedLink = styled(motion.a)`
  display: inline-block;
  position: relative;
  color: ${props => props.theme.palette.primary.main};
  text-decoration: none;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background: ${props => props.theme.palette.primary.main};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const Section = styled(motion.div)<{ secondary?: boolean }>`
  width: 100%;
  min-height: 100vh;
  padding: 50px 10px 50px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.secondary? props.theme.palette.background.paper : 'unset'};
  border: ${props => props.secondary? `1px solid ${props.theme.palette.divider}` : 'none'};
  border-left: none;
  border-right: none;
`;