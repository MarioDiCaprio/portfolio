import {styled} from "@mui/material";
import {motion} from "framer-motion";


export const VibrantCode = styled(motion.span)`
  color: ${props => props.theme.palette.primary.main};
  font-family: 'Source Code Pro', monospace;
  font-size: 20px;
`;

export const PrimaryHeadline = styled(motion.h1)`
  color: ${props => props.theme.palette.secondary.main};
  font-size: 32px;
  font-weight: 700;
  line-height: 35px;
  span {
    font-size: 28px;
    font-weight: lighter;
    margin-right: 10px;
  }
`;

export const SecondaryHeadline = styled(motion.h2)`
  color: ${props => props.theme.palette.secondary.dark};
  font-size: 28px;
  font-weight: 700;
  line-height: 35px;
`;

export const Text = styled(motion.p)`
  color: ${props => props.theme.palette.text.secondary};
  font-size: 1.1rem;
  line-height: 1.5;
`;

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