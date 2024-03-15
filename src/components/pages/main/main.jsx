import { useScroll, motion, useTransform, distance } from 'framer-motion';
import { Button } from '../../common/button/button.jsx';
import { LogoCube } from './components/logoCube/logoCube.jsx';
import { Section, BtnInner, Title, Message, MessageGreenWrap, MessageGrayWrap, MessageText, LaptopImage } from './mainStyled.js';
import { LinkGenerator } from './components/linkGenerator/linkGenerator';
import { useEffect, useRef, useState } from 'react';
const laptop = require("../../../accet/images/laptop.png");

export const Main = () => {
        const laptopImageRef = useRef(null);
        const sectionRef = useRef(null);
        const [leptopDistance, setLeptopDistance] = useState(null);

        const updateDistance = () => {
                const result = sectionRef.current.offsetTop * 1.2;
                setLeptopDistance(result);
        }

        useEffect(() => {
                updateDistance();
        }, [])

        const { scrollY } = useScroll();
        const titleScale = useTransform(scrollY, [0, 1000], [1, 8]);
        const scale = useTransform(scrollY, [0, 3000], [1, 1]);

        const right = useTransform(scrollY, [leptopDistance + 100, 3000], ["25%", "-200%"]);
        const left = useTransform(scrollY, [leptopDistance + 100, 3000], ["25%", "-200%"]);

        const laptopScale = useTransform(scrollY, [leptopDistance, 3500], [0, 20])

        window.addEventListener("scroll", () => {
                console.log(window.scrollY)
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 50 ?
                        laptopImageRef.current.style.display = "none" :
                        laptopImageRef.current.style.display = "block";
        });

        const opacity = useTransform(scrollY, [leptopDistance, 3500], [0, 1])

        return (
                <>
                        <Section>
                                <LogoCube />
                        </Section>
                        <Section ref={sectionRef} style={{ position: "relative" }}>
                                <Title style={{ scale: titleScale }}>
                                        <span>Mess Chat</span>
                                </Title>
                                <LaptopImage
                                        ref={laptopImageRef}
                                        style={{
                                                scale: laptopScale,
                                        }}>

                                        <Message style={{ top: "30%", left: left, scale: scale }}>
                                                <MessageGreenWrap>
                                                        <MessageText>Hello</MessageText>
                                                </MessageGreenWrap>
                                        </Message >
                                        <Message style={{ top: "50%", left: left, scale: scale }}>
                                                <MessageGrayWrap>
                                                        <MessageText>there we go 😜</MessageText>
                                                </MessageGrayWrap>
                                        </Message >
                                        <Message style={{ top: "40%", right: right, scale: scale }}>
                                                <MessageGrayWrap>
                                                        <MessageText>you are cute kitchen❤️</MessageText>
                                                </MessageGrayWrap>
                                        </Message >
                                        <Message style={{ top: "60%", right: right, scale: scale }}>
                                                <MessageGreenWrap>
                                                        <MessageText>How are you going?</MessageText>
                                                </MessageGreenWrap>
                                        </Message >

                                        <img src={laptop} alt="" />
                                </LaptopImage>
                        </Section>
                        <Section style={{opacity}}>
                                <LinkGenerator />
                        </Section>

                </>
        )
}
