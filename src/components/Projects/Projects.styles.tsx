import {styled} from "@mui/material";
import {PrimaryHeadline} from "../../styles/presets.styles";


export const Context = styled('div')`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Title = styled(PrimaryHeadline)`
  margin-bottom: 50px
`;