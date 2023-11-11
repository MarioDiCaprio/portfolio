import {styled} from "@mui/material";
import {motion} from "framer-motion";
import {UnderlinedLink} from "../../styles/presets.styles";


export const Context = styled('div')`
  position: relative;
  width: 100vw;
  height: 105vh;
  min-height: 900px;
  padding:  0 100px 0 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${props => props.theme.palette.primary.contrastText};

  background-image: url("/landing-page/wallpaper.svg");
  background-repeat: no-repeat;
  background-size: cover;
  
  &::before {
    content: '';
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    bottom: -1px;
    background: ${props => props.theme.palette.background.default};
    clip-path: polygon(71.5% 0, 0% 100%, 100% 100%);
  }
  
  @media (max-width: 650px) {
    padding: 0 20px 0 20px;
  }
  
  @media (max-width: 990px) {
    min-height: 800px;
    &::before {
      height: 80px;
    }
  }
`;

export const Content = styled('div')`
  max-width: 670px;
`;

export const BannerContainer = styled('div')`
  width: 380px;
  max-width: 100%;
  display: flex;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 2px;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Banner1 = styled('div')`
  width: 66%;
  height: 100%;
  border-radius: 5px 0 0 5px;
  background: #0000001A;
  padding: 10px 30px 10px 30px;
  text-transform: uppercase;
  @media (max-width: 600px) {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }
`;

export const Banner2 = styled(Banner1.withComponent('a'))`
  width: 34%;
  border-radius: 0 5px 5px 0;
  color: ${props => props.theme.palette.text.primary};
  background: ${props => props.theme.palette.secondary.main};
  text-decoration: none;
  transition: 0.5s;
  &:hover {
    background: ${props => props.theme.palette.text.primary};
    color: ${props => props.theme.palette.primary.contrastText};
    transition: 0.5s;
  }
  @media (max-width: 600px) {
    border-radius: 0 0 5px 5px;
  }
`;

export const Title = styled('h1')`
  font-size: clamp(50px, 10vw, 5rem);
  line-height: clamp(50px, 10vw, 5rem);
  margin: 10px 0 25px 0;
`;

export const Summary = styled('p')`
  font-size: 1rem;
  line-height: 2rem;
  margin-bottom: 60px;
`;

export const SummaryLink = styled(UnderlinedLink)`
  color: white;
  font-weight: bold;
  &::after {
    background: white;
  }
`;

export const GithubButton = styled('a')`
  border: 2px solid ${props => props.theme.palette.primary.contrastText};
  color: ${props => props.theme.palette.primary.contrastText};
  text-decoration: none;
  padding: 20px 40px 20px 40px;
  border-radius: 5px;
  font-weight: 700;
  transition: 0.5s;
  &:hover {
    background: ${props => props.theme.palette.primary.contrastText};
    color: ${props => props.theme.palette.text.primary};
    transition: 0.5s;
  }
`;

export const Phone = styled(motion.div)`
  position: absolute;
  right: 15vw;
  bottom: 45px;
  @media (max-width: 1300px) {
    right: 5vw;
  }
  @media (max-width: 1170px) {
    right: 0;
  }
  @media (max-width: 1020px) {
    display: none;
  }
`;

export const PhoneImage = styled(motion.img)`
  width: 25vw;
  min-width: 300px;
  user-select: none;
  pointer-events: none;
`;