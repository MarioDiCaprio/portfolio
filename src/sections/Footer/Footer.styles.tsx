import {styled} from "@mui/material";


export const Context = styled('div')`
  color: #A3A4B3;
  background: ${props => props.theme.palette.text.primary};
`;

export const Content = styled('div')`
  width: 100%;
  padding: 140px 0 100px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ThanksgivingTitle = styled('h4')`
  font-size: 1.5rem;
  color: #FFFFFF;
  margin: 0 0 20px 0;
`;

export const ThanksgivingContent = styled('p')`
  line-height: 2rem;
`;

export const BottomSection = styled('div')`
  width: 100%;
  padding: 40px 0;
`;

/////////////////////////////////////////////////////////////////////////////////////

export const LinksSection = styled('div')`
  display: flex;
  gap: 20px;
`;

const Link = styled('a')`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  border-radius: 50%;
  background-size: 200%;
  background-repeat: no-repeat;
  background-position: 0;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-position: 100%;
    transition: 0.5s;
  }
`;

export const LinkedIn = styled(Link)`
  color: #FFFFFF;
  background-image: linear-gradient(to right, #4aa2f8, #4af8f8, #4aa2f8);
`;

export const Instagram = styled(Link)`
  color: #FFFFFF;
  background-image: linear-gradient(to right, #ec0bac, #ffc861, #ec0bac);
`;

export const GitHub = styled(Link)`
  color: #FFFFFF;
  background-image: linear-gradient(to right, #1d1d9f, #6bcbf3, #1d1d9f);
`;