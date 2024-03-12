import { useScroll, motion, useTransform } from 'framer-motion';
import { Button } from '../../common/button/button.jsx';
import { LogoCube } from './components/logoCube/logoCube.jsx';
import { Section, BtnInner, Title, Message, MessageGreenWrap, MessageGrayWrap, MessageText, LaptopImage } from './mainStyled.js';
import { LinkGenerator } from './components/linkGenerator/linkGenerator';
import { useRef } from 'react';
const laptop = require("../../../accet/images/laptop.png");

export const Main = () => {
        const { scrollY } = useScroll();
        const titleScale = useTransform(scrollY, [0, 2000], [1, 20]);
        const right = useTransform(scrollY, [0, 2000], ["60%", "120%"]);
        const right2 = useTransform(scrollY, [0, 2000], ["20%", "120%"]);
        const scale = useTransform(scrollY, [0, 1000], [1, 2]);
        const left = useTransform(scrollY, [0, 2000], ["40%", "120%"]);
        const left2 = useTransform(scrollY, [0, 2000], ["20%", "120%"]);
        const laptopScale = useTransform(scrollY, [800, 20000], [0, 100]);
        const laptopTopPosition = useTransform(scrollY, [1000, 2000], [300, 1000]);

        const laptopImageRef = useRef(null);

        window.addEventListener("scroll", () => {
                const laptopImageStyle = laptopImageRef.current.style;

                laptopImageStyle.top >= "780px" ?
                        laptopImageStyle.display = "none" :
                        laptopImageStyle.display = "block"
        });

        return (
                <>
                        <Section>
                                <LogoCube />
                        </Section>
                        <Section style={{ position: "relative" }}>

                                <Title style={{ scale: titleScale }}>
                                        <span>Mess Chat</span>
                                </Title>

                                <Message style={{ top: "50%", right: right, scale: scale }}>
                                        <MessageGreenWrap>
                                                <MessageText>Hello</MessageText>
                                        </MessageGreenWrap>
                                </Message >
                                <Message style={{ top: "70%", right: right2, scale: scale }}>
                                        <MessageGrayWrap>
                                                <MessageText>there we go 😜</MessageText>
                                        </MessageGrayWrap>
                                </Message >
                                <Message style={{ top: "60%", left: left, scale: scale }}>
                                        <MessageGrayWrap>
                                                <MessageText>you are cute kitchen❤️</MessageText>
                                        </MessageGrayWrap>
                                </Message >
                                <Message style={{ top: "80%", left: left2, scale: scale }}>
                                        <MessageGreenWrap>
                                                <MessageText>How are you going?</MessageText>
                                        </MessageGreenWrap>
                                </Message >

                                <LaptopImage
                                        ref={laptopImageRef}
                                        style={{
                                                scale: laptopScale,
                                                top: laptopTopPosition,
                                        }}>
                                        <img src={laptop} alt="" />
                                </LaptopImage>

                        </Section>
                        <Section>
                                <LinkGenerator />
                                {/* <BtnInner to={"/generator"}>
                                        <Button size={"big"} text={"Get started"} />
                                </BtnInner> */}

                        </Section>

                </>
        )
}

