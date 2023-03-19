// noinspection JSUnusedGlobalSymbols

import {Meta, StoryFn} from "@storybook/react";
import {Navbar} from "./Navbar";
import styled from "styled-components";

////////////////////////////////////////////////////////////////////////

export default {
    title: 'Components/Navbar',
    component: Navbar,
    tags: ['autodocs']
} as Meta<typeof Navbar>;

type Story = StoryFn<typeof Navbar>;

////////////////////////////////////////////////////////////////////////

const Wrapper = styled.div`
  width: 100%;
  min-height: 200px;
`;

export const Main: Story = props => (
    <Wrapper>
        <Navbar {...props} />
    </Wrapper>
);
