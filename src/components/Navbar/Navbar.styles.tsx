import {styled} from "@mui/material";


export const Context = styled('div')<{ variant: 'initial' | 'scrolled' }>`
  width: 100vw;
  height: ${props => props.variant == 'initial'? '110px' : '75px'};
  background: ${props => props.variant == 'scrolled' && props.theme.palette.text.primary};
  padding: 0 20px 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: 0.3s;
`;

export const Content = styled('div')`
  width: 100%;
  max-width: 1100px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.palette.primary.contrastText};
  font-weight: 500;
`;

export const LinksSection = styled('div')`
  display: flex;
  gap: 40px;
`;

export const Logo = styled('img')`
  width: 70px;
  border-radius: 50%;
`;