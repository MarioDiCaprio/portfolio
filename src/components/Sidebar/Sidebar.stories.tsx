// noinspection JSUnusedGlobalSymbols

import {Meta, StoryFn} from "@storybook/react";
import {Sidebar} from "./Sidebar";
import {styled} from "@mui/material";

////////////////////////////////////////////////////////////////////////

export default {
    title: 'Components/Sidebar',
    component: Sidebar,
    tags: ['autodocs']
} as Meta<typeof Sidebar>;

type Story = StoryFn<typeof Sidebar>;

////////////////////////////////////////////////////////////////////////

const Wrapper = styled('div')`
  width: 100%;
  min-height: 600px;
`;

export const Main: Story = props => (
    <Wrapper>
        <Sidebar {...props} />
    </Wrapper>
);

Main.args = {
    open: true
}