import React from "react";
import {Content, Context, Message} from "./PhoneScreenOverload.styles";


const PhoneScreenOverload: React.FC = () => {
    return (
        <Context>
            <Content>

                <Message>
                    Hello, World!
                </Message>

                <Message>
                    This is my personal portfolio website. I'm happy to
                    have you here!
                </Message>

                <Message>
                    Check out some of my projects below!
                </Message>

            </Content>
        </Context>
    );
}

export default PhoneScreenOverload;