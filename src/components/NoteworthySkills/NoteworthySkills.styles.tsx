import styled from "styled-components";
import {theme} from "../../theme";
import {PrimaryHeadline} from "../../styles/presets.styles";


export const Context = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${theme.breakpoints.md}px) {
    margin-top: 50px;
  }
`;

export const Header = styled(PrimaryHeadline)`
  width: 100%;
  text-align: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${theme.breakpoints.md};
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const SkillGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SkillItem = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  * {
    color: ${theme.palette.seaGreen};
  }
`;
