// noinspection JSUnusedGlobalSymbols

import {Meta, StoryObj} from "@storybook/react";
import {Logo} from "./Logo";

////////////////////////////////////////////////////////////////////////

export default {
    title: 'Components/Logo',
    component: Logo,
    tags: ['autodocs']
} as Meta<typeof Logo>;

type Story = StoryObj<typeof Logo>;

////////////////////////////////////////////////////////////////////////

export const Main: Story = {
    args: {
        width: 200,
        widthUnit: 'px',
        borderless: false
    }
}

export const Borderless: Story = {
    args: {
        width: 200,
        widthUnit: 'px',
        borderless: true
    }
}