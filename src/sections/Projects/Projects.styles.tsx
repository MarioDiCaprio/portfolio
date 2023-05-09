import {styled} from "@mui/material";


export const Context = styled('div')`
  width: 100%;
  margin-top: 120px;
  padding: 120px 0 120px 0;
  background: #f4f4f8;
`;

export const Title = styled('h2')`
  font-size: clamp(20px, 8vw, 3rem);
  font-weight: 800;
`;

export const ProjectContainer = styled('div')`
  width: 100%;
  display: flex;
  @media (max-width: 850px) {
    flex-direction: column-reverse;
  }
`;

export const ProjectImage = styled('img')`
  width: 50%;
  border-radius: 5px;
  object-fit: contain;
  @media (max-width: 850px) {
    width: 100%;
  }
`;

export const ProjectContent = styled('div')`
  width: 50%;
  padding-left: 60px;
  @media (max-width: 850px) {
    width: 100%;
    padding-left: 0;
  }
`;

export const ProjectTitle = styled('h4')`
  font-size: 2rem;
  margin-bottom: 30px;
`;

export const ProjectDescription = styled('p')`
  width: 100%;
  font-size: 1rem;
  line-height: 1.8rem;
  color: ${props => props.theme.palette.text.secondary};
  background: ${props => props.theme.palette.background.default};
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.04);
  border: 1px solid #E8E8EFFF;
  padding: 25px;
`;

export const ProjectLinks = styled('div')`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
`;