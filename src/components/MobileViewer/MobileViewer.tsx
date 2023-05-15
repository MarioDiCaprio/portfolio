import React, {useEffect, useState} from "react";
import {
    ButtonContainer,
    PhoneImage,
    PhoneImagesContainer,
    PhonePreviewContainer,
    PreviewImage
} from "./MobileViewer.styles";
import {FaArrowLeft as LeftArrowIcon, FaArrowRight as RightArrowIcon} from "react-icons/fa";
import {IconButton, useMediaQuery} from "@mui/material";
import {animate, useMotionValue} from "framer-motion";


// NOTE: Number of sources should be odd (ideally, 5)
const sources = [
    "/projects/mobile/mobile-complexify-1.png",
    "/projects/mobile/mobile-complexify-2.png",
    "/projects/mobile/mobile-complexify-1.png",
    "/projects/mobile/mobile-complexify-2.png",
    "/projects/mobile/mobile-complexify-1.png",
];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface ImagesWithContainerProps {
    index: number;
    direction: 'forward' | 'backward';
    containerPosition: number;
    wrappingInterval: [number, number];
}

const ImagesWithContainer: React.FC<ImagesWithContainerProps> = ({ index, direction, containerPosition, wrappingInterval }) => {
    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const [containerPos, setContainerPos] = useState<number>(containerPosition);
    const x = useMotionValue<number>(0);

    const fac = (direction === 'forward')? 1 : -1;
    const imageWidth = isSmallScreen? 230 : 289;
    const containerWidth = (imageWidth + 50) * sources.length;

    function fixPositionIfNecessary() {
        if (index % sources.length === 0) {
            let pos = containerPos + fac;
            if (pos > wrappingInterval[1]) {
                pos = wrappingInterval[0];
            } else if (pos < wrappingInterval[0]) {
                pos = wrappingInterval[1];
            }
            setContainerPos(pos);
        }
    }

    useEffect(() => {
        x.set(containerWidth * containerPosition);
    }, [containerPos, isSmallScreen]);

    useEffect(() => {
        animate(x, x.get() + (imageWidth + 50) * fac, {
            duration: 0.5,
            onComplete: () => {
                fixPositionIfNecessary();
            }
        });
    }, [index]);

    return (
        <PhoneImagesContainer style={{ x }}>
            {
                sources.map((src, i) => <PreviewImage key={i} src={src}/>)
            }
        </PhoneImagesContainer>
    );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const MobileViewer: React.FC = () => {
    const [index, setIndex] = useState<number>(0);
    const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

    function nextIndex() {
        setDirection('forward');
        setIndex(index + 1);
    }

    function prevIndex() {
        setDirection('backward');
        setIndex(index - 1);
    }

    return (
        <>
            <PhonePreviewContainer>
                <PhoneImage src="/projects/mobile/phone.svg"/>
                {
                    [-2, -1, 0, 1, 2].map(key => (
                        <ImagesWithContainer
                            key={key}
                            index={index}
                            direction={direction}
                            containerPosition={key}
                            wrappingInterval={[-2, 2]}
                        />
                    ))
                }
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