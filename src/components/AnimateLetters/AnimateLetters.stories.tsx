// noinspection JSUnusedGlobalSymbols

import {Meta, StoryFn} from "@storybook/react";
import {AnimateLetters} from "./AnimateLetters";
import {styled} from "@mui/material";

////////////////////////////////////////////////////////////////////////

export default {
    title: 'Components/AnimateLetters',
    component: AnimateLetters,
    tags: ['autodocs']
} as Meta<typeof AnimateLetters>;

type Story = StoryFn<typeof AnimateLetters>;

////////////////////////////////////////////////////////////////////////

const Wrapper = styled('h2')`
  color: ${props => props.theme.palette.text.primary};
`;

export const Main: Story = props => (
    <Wrapper>
        <AnimateLetters {...props}>
            Hello, World!
        </AnimateLetters>
    </Wrapper>
);