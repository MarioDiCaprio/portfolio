// noinspection JSUnusedGlobalSymbols

import {Meta, StoryFn} from "@storybook/react";
import {AnimateLetters} from "./AnimateLetters";
import {theme} from "../../theme";

////////////////////////////////////////////////////////////////////////

export default {
    title: 'Components/AnimateLetters',
    component: AnimateLetters,
    tags: ['autodocs']
} as Meta<typeof AnimateLetters>;

type Story = StoryFn<typeof AnimateLetters>;

////////////////////////////////////////////////////////////////////////

export const Main: Story = props => (
    <h2 style={{ color: theme.palette.lavenderBlue }}>
        <AnimateLetters {...props}>
            Hello, World!
        </AnimateLetters>
    </h2>
);