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
  left: calc(50% - 510px / 2);
  display: flex;
  align-items: center;
  gap: 100px;
  overflow: visible;
  @media (max-width: 700px) {
    top: calc(50% - 255px / 2);
    left: calc(50% - 365px / 2);
  }
`;

export const PhoneImage = styled('img')`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 656px;
  scale: 1 0.95;
  translate: -50% -37%;
  z-index: 100;
  @media (max-width: 700px) {
    scale: 0.7;
  }
`;

export const PreviewImage = styled(motion.img)`
  width: 506px;
  border-radius: 30px;
  @media (max-width: 700px) {
    width: calc(506px * 0.725);
  }
`;

export const ButtonContainer = styled('div')`
  width: 100%;
  margin: 160px 0 75px 0;
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