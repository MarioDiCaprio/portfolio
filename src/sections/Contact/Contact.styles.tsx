import {styled} from "@mui/material";


export const Content = styled('div')`
  width: 100%;
`;

export const Info = styled('div')`
  color: ${props => props.theme.palette.info.main};
  margin-bottom: 50px;
`;

export const StyledInput = styled('input')`
  width: 100%;
  padding: 25px;
  background: #f4f4f8;
  border: none;
  font-size: 1rem;
  font-weight: 500;
`;

export const StyledTextArea = styled(StyledInput.withComponent('textarea'))`
  min-height: 200px;
  resize: vertical;
`;

export const SubmitButton = styled('button')`
  width: 100%;
  max-width: 300px;
  padding: 20px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 800;
  color: ${props => props.theme.palette.primary.contrastText};
  background: linear-gradient(90deg, ${props => props.theme.palette.primary.main}, ${props => props.theme.palette.secondary.main}, ${props => props.theme.palette.primary.main});
  background-size: 200%;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-position: -300px;
    transition: 0.5s;
  }
`;