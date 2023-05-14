import React, {useRef, useState} from "react";
import {ButtonContainer, PhoneImage, PhonePreviewContainer, PreviewImage} from "./MobileViewer.styles";
import {FaArrowLeft as LeftArrowIcon, FaArrowRight as RightArrowIcon} from "react-icons/fa";
import {IconButton, useMediaQuery} from "@mui/material";


// NOTE: Number of sources should be odd (ideally, 5)
const sources = [
    "/projects/mobile/mobile-complexify-1.png",
    "/projects/mobile/mobile-complexify-2.png",
    "/projects/mobile/mobile-complexify-1.png",
    "/projects/mobile/mobile-complexify-2.png",
    "/projects/mobile/mobile-complexify-1.png",
];

function calculateNextIndex(index: number): number {
    let j = index + 1;
    return (j === sources.length)? 0 : j;
}

function calculatePrevIndex(index: number): number {
    let j = index - 1;
    return (j < 0)? sources.length - 1 : j;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface MobileImageProps {
    activeIndex: number;
    index: number;
    src: string;
}

const MobileImage: React.FC<MobileImageProps> = ({ src, index, activeIndex }) => {
    const ref = useRef<HTMLImageElement>(null);
    const isSmallScreen = useMediaQuery('(max-width: 600px)');

    let width = isSmallScreen? 230 : 289;
    let center = Math.floor(sources.length / 2);

    let shift = index - activeIndex;
    if (shift < -center)
        shift += sources.length;
    if (shift > center)
        shift -= sources.length;

    if (ref.current) {

    }

    return (
        <PreviewImage
            ref={ref}
            key={index}
            src={src}
            animate={{
                translateX: (width + 50) * shift
            }}
            transition={{
                duration: 0.5
            }}
        />
    );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const MobileViewer: React.FC = () => {
    const [active, setActive] = useState<number>(0);

    function nextIndex() {
        let i = calculateNextIndex(active);
        setActive(i);
    }

    function prevIndex() {
        let i = calculatePrevIndex(active);
        setActive(i);
    }

    const imageComponents = sources.map((src, index) => (
        <MobileImage index={index} activeIndex={active} src={src} />
    ));

    return (
        <>
            <PhonePreviewContainer>
                <PhoneImage src="/projects/mobile/phone.svg"/>
                { ...imageComponents }
            </PhonePreviewContainer>
            <ButtonContainer>
                <IconButton color="primary" onClick={prevIndex}>
                    <LeftArrowIcon />
                </IconButton>
                <IconButton color="primary" onClick={nextIndex}>
                    <RightArrowIcon />
                </IconButton>
            </ButtonContainer>
        </>
    );
}

export default MobileViewer;