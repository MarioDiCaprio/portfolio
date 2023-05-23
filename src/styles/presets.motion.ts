import {styled} from "@mui/material";


export const Title = styled('h3')`
  margin-top: 0;
  font-size: clamp(20px, 8vw, 3rem);
  font-weight: 800;
  line-height: 1.1em;
`;

export const Subtitle = styled('h5')`
  margin-bottom: 0;
  font-size: 18px;
  font-weight: 500;
  line-height: 1em;
  color: ${props => props.theme.palette.info.main};
`;
