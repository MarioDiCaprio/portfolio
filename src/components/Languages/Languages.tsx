import React from "react";
import {Card, CardWrapper, Context} from "./Languages.styles";
import {Title, Subtitle} from "../../styles/presets.motion";


const Languages: React.FC = () => {
    return (
        <Context>

            <Subtitle>
                Check This Out
            </Subtitle>
            <Title>
                Languages I Speak
            </Title>

            <CardWrapper>
                <Card>
                    <img alt="" src="/languages/javascript.svg" />
                    JavaScript
                </Card>
                <Card>
                    <img alt="" src="/languages/typescript.svg" />
                    TypeScript
                </Card>
                <Card>
                    <img alt="" src="https://classes.engineering.wustl.edu/cse231/core/images/2/26/Java.png"/>
                    Java
                </Card>
                <Card>
                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/1200px-Kotlin_Icon.svg.png"/>
                    Kotlin
                </Card>
                <Card>
                    <img alt="" src="/languages/python.svg" />
                    Python
                </Card>
                <Card>
                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg"/>
                    C#
                </Card>
            </CardWrapper>
        </Context>
    );
}

export default Languages;