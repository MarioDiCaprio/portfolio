import {styled} from "@mui/material";

export const Content = styled('div')`
  width: 100%;
  margin-top: 100px;
  display: flex;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const Box1 = styled('div')`
  width: 50%;
  img {
    width: 100%;
    user-select: none;
    pointer-events: none;
  }
  @media (max-width: 850px) {
    width: 90%;
    justify-self: center;
    align-self: center;
  }
`;

export const Box2 = styled('div')`
  width: 50%;
  padding-left: 70px;
  @media (max-width: 850px) {
    width: 100%;
    padding: 0 10px 0 10px;
  }
`;

export const ParagraphContainer = styled('div')`
  display: flex;
  margin-bottom: 40px;
`;

export const ParagraphIcon = styled('div')`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  padding: 10px;
  background: linear-gradient(
    140deg,
    ${props => props.theme.palette.primary.main},
    ${props => props.theme.palette.secondary.main}
  );
  color: ${props => props.theme.palette.primary.contrastText};
  * {
    width: 100%;
    height: 100%;
  }
`;

export const ParagraphContent = styled('div')`
  width: calc(100% - 85px);
  padding-left: 25px;
  h4 {
    margin: 0 0 15px 0;
    font-size: 1.5rem;
    font-weight: 700;
  }
  p {
    margin: 0;
    font-size: 1.1rem;
    line-height: 2rem;
    color: ${props => props.theme.palette.text.secondary};
  }
`;