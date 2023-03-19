// noinspection JSUnusedGlobalSymbols

import {Meta, StoryFn, StoryObj} from "@storybook/react";
import {FeaturedProject} from "./FeaturedProject";
import React from "react";

////////////////////////////////////////////////////////////////////////

export default {
    title: 'Components/FeaturedProject',
    component: FeaturedProject,
    tags: ['autodocs']
} as Meta<typeof FeaturedProject>;

type Story = StoryObj<typeof FeaturedProject>;

////////////////////////////////////////////////////////////////////////

export const Main: Story = {
    args: {
        imgSrc: '/thumbnails/domcol_js.png',
        title: 'Domcol-JS',
        links: {
            official: 'https://domcol-js.vercel.app',
            github: 'https://github.com/MarioDiCaprioUni/domcol-js'
        },
        children:
            <>
                A tool for visualizing complex-valued functions using a method called {' '}
                <i>Domain Coloring</i>. Check it out if you are a math-geek, you can even
                plot the famous Mandelbrot-Set!
            </>
    }
}

export const Multiple: StoryFn = () => (
    <div>
        <FeaturedProject
            imgSrc="/thumbnails/domcol_js.png"
            title="Domcol-JS"
            links={{
                official: 'https://domcol-js.vercel.app',
                github: 'https://github.com/MarioDiCaprioUni/domcol-js'
            }}
        >
            A tool for visualizing complex-valued functions using a method called {' '}
            <i>Domain Coloring</i>. Check it out if you are a math-geek, you can even
            plot the famous Mandelbrot-Set!
        </FeaturedProject>

        <FeaturedProject
            imgSrc="/thumbnails/travel2go.png"
            title="Travel2Go"
            links={{
                official: 'https://travel2go.vercel.app',
                github: 'https://github.com/MarioDiCaprioUni/travel2go'
            }}
        >
            This project is a reference for many interesting travel locations. Useful data,
            such as prices, distances and catching images are included as well.
        </FeaturedProject>
    </div>
);