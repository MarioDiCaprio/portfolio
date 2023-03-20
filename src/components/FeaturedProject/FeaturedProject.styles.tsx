import {styled} from "@mui/material";
import {motion} from "framer-motion";
import {PrimaryHeadline, Text} from "../../styles/presets.styles";


export const SmallContext = styled(motion.div)`
  max-width: 500px;
  width: fit-content;
  height: fit-content;
  padding: 25px;
  margin-bottom: 30px;
  border-radius: 5px;
  background: #112240;
`;

export const SmallHeadline = styled(PrimaryHeadline)`
  span {
    font-size: 13px;
  }
`;

export const SmallDescription = styled(motion.p)`
  width: 100%;
  font-size: 15.5px;
  color: #a9b2ce;
  line-height: 24px;
`;

export const SmallLinks = styled(motion.div)`
  font-size: 25px;
  * {
    color: ${props => props.theme.palette.primary.main};
    margin: 5px;
  }
`;

///////////////////////////////////////////////////////////////////////////////////////////

export const Context = styled('div')`
  width: 1000px;
  height: 370px;
  position: relative;
  margin-bottom: 50px;
  &:nth-child(2n + 1) {
    .FeaturedProject-content {
      position: absolute;
      left: 0;
    }
    .FeaturedProject-thumbnail {
      position: absolute;
      right: 0;
    }
  }
  &:nth-child(2n) {
    .FeaturedProject-content {
      position: absolute;
      right: 0;
      text-align: right;
    }
    .FeaturedProject-thumbnail {
      position: absolute;
      left: 0;
    }
  }
`;

export const Content = styled(motion.div)`
  width: 500px;
  height: fit-content;
  border-radius: 5px;
  z-index: 2;
`;

export const Headline = styled(PrimaryHeadline)`
  span {
    font-size: 13px
  }
`;

export const Description = styled(Text)`
  width: 100%;
  font-size: 15.5px;
  color: #a9b2ce;
  line-height: 24px;
  background: #112240;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.26);
  padding: 25px;
`;

export const Thumbnail = styled(motion.div)`
  width: 580px;
  height: 340px;
  position: relative;
  img, div {
    width: 580px;
    height: 340px;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 5px;
  }
  div {
    background: rgba(29, 255, 202, 0.4);
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      background: transparent;
      transition: 0.5s;
    }
  }
`;

export const Links = styled(motion.div)`
  font-size: 25px;
  a {
    color: ${props => props.theme.palette.text.primary};
    margin: 5px;
    transition: 0.3s;
    &:hover {
      color: ${props => props.theme.palette.primary.main};
      transition: 0.3s;
    }
  }
`;
