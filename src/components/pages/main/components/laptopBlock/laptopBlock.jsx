import { useScroll, useTransform } from 'framer-motion';
import { LaptopImage, Message, MessageGrayWrap, MessageGreenWrap, MessageText } from "./styledLaptopBlock"

const laptop = require("../../../../../assets/images/laptop.png");
const phone = require("../../../../../assets/images/phone.png");

export const LaptopBlock = ({ laptopImageRef, laptopDistance }) => {
    const windowWidth = window.innerWidth;
    const { scrollY } = useScroll();

    const messageScale = useTransform(scrollY, [0, 3000], [1, 1]);
    const messageRight = useTransform(scrollY, [laptopDistance + 100, 3000], ["25%", "-200%"]);
    const messageLeft = useTransform(scrollY, [laptopDistance + 100, 3000], ["25%", "-200%"]);
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
            <img src={windowWidth >= 768 ? laptop : phone} alt="laptop" />
        </LaptopImage>
    )
}