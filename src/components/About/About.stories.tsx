// noinspection JSUnusedGlobalSymbols

import {Meta, StoryObj} from "@storybook/react";
import {About} from "./About";

////////////////////////////////////////////////////////////////////////

export default {
    title: 'Sections/About',
    component: About,
    tags: ['autodocs']
} as Meta<typeof About>;

type Story = StoryObj<typeof About>;

////////////////////////////////////////////////////////////////////////

export const Main: Story = {

}