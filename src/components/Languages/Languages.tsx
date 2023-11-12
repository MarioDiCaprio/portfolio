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
                    <img alt="" src="/languages/JavaScript.svg" />
                    JavaScript
                </Card>
                <Card>
                    <img alt="" src="/languages/TypeScript.svg" />
                    TypeScript
                </Card>
                <Card>
                    <img alt="" src="/languages/Java.svg"/>
                    Java
                </Card>
                <Card>
                    <img alt="" src="/languages/Kotlin.svg"/>
                    Kotlin
                </Card>
                <Card>
                    <img alt="" src="/languages/Python.svg" />
                    Python
                </Card>
                <Card>
                    <img alt="" src="/languages/C%23.svg"/>
                    C#
                </Card>
            </CardWrapper>
        </Context>
    );
}

export default Languages;