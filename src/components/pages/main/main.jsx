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
        const scale = useTransform(scrollY, [0, 1000], [1, 2]);

        const right = useTransform(scrollY, [0, 3000], ["5%", "160%"]);
        const right2 = useTransform(scrollY, [0, 3000], ["-3%", "160%"]);
        const left = useTransform(scrollY, [0, 3000], ["-48%", "200%"]);
        const left2 = useTransform(scrollY, [0, 3000], ["-45%", "200%"]);
        const laptopScale = useTransform(scrollY, [800, 20000], [0, 100]);
        const laptopTopPosition = useTransform(scrollY, [1000, 2000], [300, 1000]);

        const laptopImageRef = useRef(null);

        window.addEventListener("scroll", () => {
                const transformValue = laptopImageRef.current.style.transform;

                if (transformValue && transformValue !== 'none') {
                        const transformMatrix = transformValue.match(/[-.\d]+/g).map(Number);
                        const scaleX = transformMatrix[0];

                        scaleX > 5.2778 ?
                                laptopImageRef.current.style.display = "none" :
                                laptopImageRef.current.style.display = "block"
                }
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
                                <LaptopImage
                                        ref={laptopImageRef}
                                        style={{
                                                scale: laptopScale,
                                                top: laptopTopPosition,
                                        }}>
                                        <img src={laptop} alt="" />
                                </LaptopImage>

                                <Message style={{ top: "80%", right: right, scale: scale }}>
                                        <MessageGreenWrap>
                                                <MessageText>Hello</MessageText>
                                        </MessageGreenWrap>
                                </Message >
                                <Message style={{ top: "95%", right: right2, scale: scale }}>
                                        <MessageGrayWrap>
                                                <MessageText>there we go 😜</MessageText>
                                        </MessageGrayWrap>
                                </Message >
                                <Message style={{ top: "90%", left: left, scale: scale }}>
                                        <MessageGrayWrap>
                                                <MessageText>you are cute kitchen❤️</MessageText>
                                        </MessageGrayWrap>
                                </Message >
                                <Message style={{ top: "110%", left: left2, scale: scale }}>
                                        <MessageGreenWrap>
                                                <MessageText>How are you going?</MessageText>
                                        </MessageGreenWrap>
                                </Message >
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
