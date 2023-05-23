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
                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"/>
                    JavaScript
                </Card>
                <Card>
                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/800px-Typescript_logo_2020.svg.png"/>
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
                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"/>
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