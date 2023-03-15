import styled from "styled-components";
import {motion} from "framer-motion";
import {PrimaryHeadline, SecondaryHeadline, Text, VibrantCode} from "../../styles/presets.styles";
import {theme} from "../../theme";


export const Context = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const ContentWrapper = styled(motion.div)`
  max-width: 1000px;
`;

export const Greeting = styled(VibrantCode)`

`;

export const Name = styled(PrimaryHeadline)`
  font-size: clamp(40px, 8vw, 80px);
  line-height: 1.1;
  margin: 10px 0 10px 0;
`;

export const Slogan = styled(SecondaryHeadline)`
  font-size: clamp(40px, 8vw, 80px);
  line-height: 1.1;
  margin: 10px 0 10px 0;
`;

export const Summary = styled(Text)`
  margin-bottom: 70px;
`;

export const GithubButton = styled(motion.a)`
  border: 1px solid ${theme.palette.seaGreen};
  border-radius: 5px;
  background: transparent;
  color: ${theme.palette.seaGreen};
  font-family: "Source Code Pro", monospace;
  text-decoration: none;
  padding: 20px;
  transition: background 0.3s;

  &:hover {
    background: rgba(29, 255, 202, 0.12);
    transition: background 0.3s;
  }
`;