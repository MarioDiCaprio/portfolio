import React, {ReactNode} from "react";
import {Context, Header, SkillGroup, SkillItem, Wrapper} from "./NoteworthySkills.styles";
import {BiRightArrow as BulletPointIcon} from "react-icons/bi";


const Skill: React.FC<{ children?: ReactNode }> = ({ children }) => (
    <SkillItem>
        <BulletPointIcon />
        { children }
    </SkillItem>
);


const NoteworthySkills: React.FC = () => {
    return (
        <Context>
            <Header>
                Other Noteworthy Skills
            </Header>
            <Wrapper>

                <SkillGroup>
                    <Skill>Styled-Components</Skill>
                    <Skill>Bootstrap</Skill>
                    <Skill>JQuery</Skill>
                    <Skill>Sass</Skill>
                </SkillGroup>

                <SkillGroup>
                    <Skill>Spring Boot</Skill>
                    <Skill>GraphQL Api</Skill>
                    <Skill>REST Api</Skill>
                    <Skill>MySQL</Skill>
                </SkillGroup>

            </Wrapper>
        </Context>
    );
}


export default NoteworthySkills;