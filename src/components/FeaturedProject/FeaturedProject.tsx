import React, {ReactNode} from "react";
import {useMaxScreen} from "../../hooks/useScreen";
import {BsGithub as GithubIcon} from "react-icons/bs";
import {MdOpenInBrowser as OfficialWebsiteIcon} from "react-icons/md";
import {infoContainerMotion, infoItemVariants, thumbnailMotion} from "./FeaturedProject.motion";
import {
    Content,
    Context, Description, Headline, Links,
    SmallContext,
    SmallDescription,
    SmallHeadline,
    SmallLinks,
    Thumbnail
} from "./FeaturedProject.styles";
import {VibrantCode} from "../../styles/presets.styles";


interface FeaturedProjectProps {
    /**
     * The project's title.
     */
    title: string;
    /**
     * The source of the project's thumbnail.
     */
    imgSrc: string;
    /**
     * Optional links for the project
     */
    links?: {
        github?: string;
        official?: string;
    };
    /**
     * A description for this project. Goes into the blue box besides the thumbnail.
     */
    children?: ReactNode;
}


/**
 * This component highlights a project to show off. Orientation alternates between left and right
 * with each `FeaturedProject`.
 */
export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ title, imgSrc, links, children }) => {
    const isSmallScreen = useMaxScreen(1100);


    if (isSmallScreen) {
        return (
            <SmallContext {...infoContainerMotion}>

                <SmallHeadline variants={infoItemVariants}>
                    <VibrantCode>
                        Featured Project <br/>
                    </VibrantCode>
                    { title }
                </SmallHeadline>

                <SmallDescription variants={infoItemVariants}>
                    { children }
                </SmallDescription>

                <SmallLinks variants={infoItemVariants}>
                    {
                        links?.github &&
                        <a href={links.github} target="_blank" rel="noreferrer">
                            <GithubIcon />
                        </a>
                    }
                    {
                        links?.official &&
                        <a href={links.official} target="_blank" rel="noreferrer">
                            <OfficialWebsiteIcon />
                        </a>
                    }
                </SmallLinks>

            </SmallContext>
        );
    }


    return (
        <Context>

            <Thumbnail className="FeaturedProject-thumbnail" {...thumbnailMotion}>
                <img src={imgSrc} alt="" />
                <div />
            </Thumbnail>

            <Content className="FeaturedProject-content" {...infoContainerMotion}>

                <Headline variants={infoItemVariants}>
                    <VibrantCode>
                        Featured Project <br/>
                    </VibrantCode>
                    { title }
                </Headline>

                <Description variants={infoItemVariants}>
                    { children }
                </Description>

                <Links variants={infoItemVariants}>
                    {
                        links?.github &&
                        <a href={links.github} target="_blank" rel="noreferrer">
                            <GithubIcon />
                        </a>
                    }
                    {
                        links?.official &&
                        <a href={links.official} target="_blank" rel="noreferrer">
                            <OfficialWebsiteIcon />
                        </a>
                    }
                </Links>

            </Content>

        </Context>
    );
}

export default FeaturedProject;