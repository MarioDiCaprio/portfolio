import styled from "styled-components";
import {theme} from "../theme";
import {motion} from "framer-motion";


export const VibrantCode = styled(motion.span)`
  color: ${theme.palette.seaGreen};
  font-family: 'Source Code Pro', monospace;
  font-size: 20px;
`;

export const PrimaryHeadline = styled(motion.h1)`
  color: ${theme.palette.lavenderBlue};
  font-family: 'Montserrat', serif;
  font-size: 32px;
  font-weight: bold;
  line-height: 35px;
  span {
    font-size: 28px;
    font-weight: lighter;
    margin-right: 10px;
  }
`;

export const SecondaryHeadline = styled(motion.h2)`
  color: ${theme.palette.coolGrey};
  font-family: 'Montserrat', serif;
  font-size: 28px;
  font-weight: bold;
  line-height: 35px;
`;

export const Text = styled(motion.p)`
  color: ${theme.palette.coolGrey};
  font-family: 'Montserrat', serif;
  font-size: 20px;
  line-height: 27px;
`;