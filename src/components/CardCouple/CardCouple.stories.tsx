// noinspection JSUnusedGlobalSymbols

import {Meta, StoryFn} from "@storybook/react";
import {CardCouple} from "./CardCouple";
import styled from "styled-components";

////////////////////////////////////////////////////////////////////////

export default {
    title: 'Components/CardCouple',
    component: CardCouple,
    tags: ['autodocs']
} as Meta<typeof CardCouple>;

type Story = StoryFn<typeof CardCouple>;

////////////////////////////////////////////////////////////////////////

const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

////////////////////////////////////////////////////////////////////////

export const Main: Story = props => (
    <Wrapper>
        <CardCouple {...props} />
    </Wrapper>

);

Main.args = {
    left: {
        title: 'React Js',
        imageSrc: '/img/react.png',
        text:
            `I love the way React lets you isolate each part of a website into single components.
            The event-driven style that comes with this library is also extremely useful and easy
            to use.`
    },
    right: {
        title: 'Next Js',
        imageSrc: '/img/next.png',
        text:
            `Built on top of React, Next Js is my framework of choice. I love how it provides a clear
            project structure and many useful features from the get-go. It is also really easy to deploy
            projects to Vercel!`
    }
}

export const Example: Story  = () => {
    let couples: Array<JSX.Element> = [];

    for (let i=0; i<6; i++) {
        // @ts-ignore
        couples.push(<CardCouple key={i} {...Main.args}/>);
    }

    return (
        <Wrapper>
            { couples }
        </Wrapper>
    );
}