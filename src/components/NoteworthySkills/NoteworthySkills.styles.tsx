import {styled} from "@mui/material";
import {PrimaryHeadline} from "../../styles/presets.styles";


export const Context = styled('div')`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${props => props.theme.breakpoints.values.md}px) {
    margin-top: 50px;
  }
`;

export const Header = styled(PrimaryHeadline)`
  width: 100%;
  text-align: center;
`;

export const Wrapper = styled('div')`
  width: 100%;
  max-width: ${props => props.theme.breakpoints.values.md}px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const SkillGroup = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SkillItem = styled('div')`
  display: flex;
  align-items: center;
  gap: 10px;
  * {
    color: ${props => props.theme.palette.primary.main};
  }
`;
