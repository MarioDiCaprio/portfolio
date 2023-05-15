import {styled} from "@mui/material";
import {motion} from "framer-motion";


export const PhonePreviewContainer = styled('div')`
  width: 100%;
  height: 800px;
  position: relative;
`;

export const PhoneImagesContainer = styled(motion.div)`
  position: absolute;
  top: calc(50% - 442px / 2);
  left: calc(50% - 289px / 2);
  display: flex;
  align-items: center;
  gap: 50px;
  overflow: visible;
  @media (max-width: 600px) {
    left: calc(50% - 230px / 2);
    top: calc(50% - 368px / 2);
  }
`;

export const PhoneImage = styled('img')`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 423px;
  height: 739px;
  translate: -211.5px -369.5px;
  scale: 1.2;
  z-index: -100;
  @media (max-width: 600px) {
    scale: 1;
  }
`;

export const PreviewImage = styled(motion.img)`
  width: 289px;
  height: 442px;
  @media (max-width: 600px) {
    width: 230px;
    height: 368px;
  }
`;

export const ButtonContainer = styled('div')`
  width: 100%;
  margin-bottom: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  translate: 0 -50px;
  z-index: 100;
  * {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    translate: 0 -100px;
    margin-bottom: 0;
  }
`;