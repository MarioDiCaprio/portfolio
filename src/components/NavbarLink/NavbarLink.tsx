import React from "react";
import {useSmallScreen} from "../../hooks/useScreen";
import {Link} from "react-scroll/modules";
import AnimateLetters from "../AnimateLetters/AnimateLetters";
import {ReactScrollLinkProps} from "react-scroll/modules/components/Link";
import {ContentWrapper, Prefix, Title} from "./ScrollLink.styles";


const linkScrollStyle: Partial<ReactScrollLinkProps> = {
    spy: true,
    smooth: true,
    duration: 1000
}


interface NavbarLinkProps {
    scrollLinkId: string;
    prefix: string;
    title: string;
    onLinkClick?: () => void;
}


const NavbarLink: React.FC<NavbarLinkProps> = ({ scrollLinkId, prefix, title, onLinkClick }) => {
    const isSmallScreen = useSmallScreen();

    function handleLinkClicked() {
        if (onLinkClick) onLinkClick();
    }

    if (isSmallScreen) {
        return (
            <Link to={scrollLinkId} {...linkScrollStyle}>
                <ContentWrapper onClick={handleLinkClicked}>
                    <Prefix>
                        {prefix}
                    </Prefix>
                    <Title>
                        {title}
                    </Title>
                </ContentWrapper>
            </Link>
        );
    }

    return (
        <Link to={scrollLinkId} {...linkScrollStyle}>
            <ContentWrapper onClick={handleLinkClicked}>
                <Prefix>
                    <AnimateLetters>{ prefix }</AnimateLetters>
                </Prefix>
                <Title>
                    <AnimateLetters>{ title }</AnimateLetters>
                </Title>
            </ContentWrapper>
        </Link>
    );
}

export default NavbarLink;