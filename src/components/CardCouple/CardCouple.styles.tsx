import {styled} from "@mui/material";
import {motion} from "framer-motion";


export const Context = styled('div')`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  @media(max-width: ${props => props.theme.breakpoints.values.md}px) {
    flex-direction: column;
    gap: 30px;
    padding: 0 10px 0 10px;
    max-width: 500px;
  }
`;

export const CardContext = styled(motion.div)`
  min-width: 80%;
  min-height: 300px;
  background: ${props => props.theme.palette.background.paper};
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  div {
    color: ${props => props.theme.palette.text.secondary};
    display: flex;
    justify-content: space-between;
    font-size: 1.1rem;
    line-height: 1.5rem;
  }

  h1 {
    color: ${props => props.theme.palette.text.primary};
  }

  img {
    width: 150px;
    height: 150px;
    object-fit: contain;
  }

  @media (max-width: 1300px) {
    div {
      flex-direction: column;
    }

    h1 {
      margin-bottom: 0;
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.values.md}px) {
    animation: none;
  }
`;