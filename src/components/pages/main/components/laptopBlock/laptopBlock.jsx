import { useEffect, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { LAPTOP, PHONE } from '../../../../../consts/images';
import { LaptopImage, Message, MessageGrayWrap, MessageGreenWrap, MessageText } from "./styledLaptopBlock"

export const LaptopBlock = ({ laptopImageRef, laptopDistance }) => {
    const [toDistanceMessages, setToDistanceMessages] = useState(null);
    const windowWidth = window.innerWidth;
    const { scrollY } = useScroll();

    useEffect(() => {
        windowWidth >= 768 ? setToDistanceMessages(3000) : setToDistanceMessages(2000);
    }, [windowWidth]);

    const messageScale = useTransform(scrollY, [0, 3000], [1, 1]);
    const messageRight = useTransform(scrollY, [laptopDistance + 100, toDistanceMessages], ["25%", "-200%"]);
    const messageLeft = useTransform(scrollY, [laptopDistance + 100, toDistanceMessages], ["25%", "-200%"]);
    const laptopScale = useTransform(scrollY, [laptopDistance, 3500], [0, 20]);

    return (
        <LaptopImage
            ref={laptopImageRef}
            style={{
                scale: laptopScale,
                visibility: "hidden",
                top: windowWidth <= 400 ? "15rem" : windowWidth <= 767 ? "18rem" : "none"
            }}>
            <Message style={{ top: "30%", left: messageLeft, scale: messageScale }}>
                <MessageGreenWrap>
                    <MessageText>It's success</MessageText>
                </MessageGreenWrap>
            </Message >
            <Message style={{ top: "50%", left: messageLeft, scale: messageScale }}>
                <MessageGrayWrap>
                    <MessageText>you are incredible❤️</MessageText>
                </MessageGrayWrap>
            </Message >
            <Message style={{ top: "40%", right: messageRight, scale: messageScale }}>
                <MessageGrayWrap>
                    <MessageText>I've done it</MessageText>
                </MessageGrayWrap>
            </Message >
            <Message style={{ top: "60%", right: messageRight, scale: messageScale }}>
                <MessageGreenWrap>
                    <MessageText>there we go 😜</MessageText>
                </MessageGreenWrap>
            </Message >
            <img src={windowWidth >= 768 ? LAPTOP : PHONE} alt="laptop" />
        </LaptopImage>
    )
}