// noinspection JSUnusedGlobalSymbols

import {Meta, StoryFn} from "@storybook/react";
import {ParallaxText} from "./ParallaxText";
import {ParallaxContent, ParallaxWrapper} from "../Interests/Interests.styles";

////////////////////////////////////////////////////////////////////////

export default {
    title: 'Components/ParallaxText',
    component: ParallaxText,
    tags: ['autodocs']
} as Meta<typeof ParallaxText>;

type Story = StoryFn<typeof ParallaxText>;

////////////////////////////////////////////////////////////////////////

export const Main: Story = props => (
    <ParallaxWrapper>
        <ParallaxText {...props}>
            <ParallaxContent>
                Did you know? My favourite opening is the Sicilian Defense, especially the
                Sveshnikov variation!
            </ParallaxContent>
        </ParallaxText>
    </ParallaxWrapper>
);

Main.args = {
    baseVelocity: 2.5
}