import styled from "styled-components";
import {theme} from "../../theme";
import {motion} from "framer-motion";


export const Context = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  @media(max-width: ${theme.breakpoints.md}px) {
    flex-direction: column;
    gap: 30px;
    padding: 0 10px 0 10px;
    max-width: 500px;
  }
`;

export const CardContext = styled(motion.div)`
  min-width: 80%;
  min-height: 300px;
  border: 2px solid ${theme.palette.seaGreen};
  border-radius: 8px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  div {
    display: flex;
    justify-content: space-between;
    font-size: 1.1rem;
    line-height: 1.5rem;
  }
  h1 {
    color: ${theme.palette.lavenderBlue};
  }
  img {
    width: 150px;
    height: 150px;
    object-fit: contain;
  }
  @media(max-width: 1300px) {
    div {
      flex-direction: column;
    }
    h1 {
      margin-bottom: 0;
    }
  }
  @media(max-width: ${theme.breakpoints.md}px) {
    animation: none;
  }
`;