import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { LogoCube } from './components/logoCube/logoCube.jsx';
import { LinkGenerator } from './components/linkGenerator/linkGenerator';
import { Section, Title, Message, MessageGreenWrap, MessageGrayWrap, MessageText, LaptopImage } from './mainStyled.js';
const laptop = require("../../../accet/images/laptop.png");
const phone = require("../../../accet/images/phone.png");

export const Main = () => {
        const { scrollY } = useScroll();
        const laptopImageRef = useRef(null);
        const sectionLaptopRef = useRef(null);
        const sectionLink = useRef(null);
        const titleRef = useRef(null);
        const windowWidth = window.innerWidth
        const [laptopDistance, setlaptopDistance] = useState(null);
        const [titleDistance, setTitleDistance] = useState(null);

        const titleScale = useTransform(scrollY, [titleDistance, 2000], [1, 8]);
        const messageScale = useTransform(scrollY, [0, 3000], [1, 1]);
        const messageRight = useTransform(scrollY, [laptopDistance + 100, 3000], ["25%", "-200%"]);
        const messageLeft = useTransform(scrollY, [laptopDistance + 100, 3000], ["25%", "-200%"]);
        const laptopScale = useTransform(scrollY, [laptopDistance, 3500], [0, 20]);

        useEffect(() => { updateDistance() }, []);

        const updateDistance = () => {
                const result = sectionLaptopRef.current.offsetTop * 1.2;
                setlaptopDistance(result);
                setTitleDistance(titleRef.current.offsetTop)
        }

        const hideLaptop = (windowHeight, bodyHeight) => {
                windowHeight + window.scrollY >= bodyHeight - 50 ?
                        laptopImageRef.current.style.display = "none" :
                        laptopImageRef.current.style.display = "block";
        }

        const hideSectionLink = (windowHeight, bodyHeight) => {
                if (windowHeight + window.scrollY >= bodyHeight - 200) {
                        sectionLink.current.style.visibility = "visible";
                        sectionLink.current.style.opacity = "1";
                } else {
                        sectionLink.current.style.visibility = "hidden";
                        sectionLink.current.style.opacity = "0";
                }
        }

        const toggleBlockVisibility = () => {
                const sectionLaptopTop = sectionLaptopRef.current.offsetTop
                const isOpacity = window.scrollY >= sectionLaptopTop;
                laptopImageRef.current.style.visibility = isOpacity ? "visible" : "hidden";
        }

        window.addEventListener("scroll", () => {
                const bodyHeight = document.body.offsetHeight;
                const windowHeight = window.innerHeight;

                toggleBlockVisibility()
                hideLaptop(windowHeight, bodyHeight)
                hideSectionLink(windowHeight, bodyHeight)
        });

        return (
                <>
                        <Section>
                                <LogoCube />
                        </Section>
                        <Section style={{ zIndex: "10" }} ref={sectionLaptopRef}>
                                <Title ref={titleRef} style={{ scale: titleScale }}>
                                        <span>Mess Chat</span>
                                </Title>
                                <LaptopImage
                                        ref={laptopImageRef}
                                        style={{
                                                scale: laptopScale,
                                                visibility: "hidden",
                                                top: windowWidth <= 400 ? "15rem" : windowWidth <= 767 ? "18rem" : "none"
                                        }}>
                                        <Message style={{ top: "30%", left: messageLeft, scale: messageScale }}>
                                                <MessageGreenWrap>
                                                        <MessageText>Hello</MessageText>
                                                </MessageGreenWrap>
                                        </Message >
                                        <Message style={{ top: "50%", left: messageLeft, scale: messageScale }}>
                                                <MessageGrayWrap>
                                                        <MessageText>there we go 😜</MessageText>
                                                </MessageGrayWrap>
                                        </Message >
                                        <Message style={{ top: "40%", right: messageRight, scale: messageScale }}>
                                                <MessageGrayWrap>
                                                        <MessageText>you are cute kitchen❤️</MessageText>
                                                </MessageGrayWrap>
                                        </Message >
                                        <Message style={{ top: "60%", right: messageRight, scale: messageScale }}>
                                                <MessageGreenWrap>
                                                        <MessageText>How are you going?</MessageText>
                                                </MessageGreenWrap>
                                        </Message >
                                        <img src={windowWidth >= 768 ? laptop : phone} alt="laptop" />
                                </LaptopImage>
                        </Section>
                        <Section ref={sectionLink}>
                                <LinkGenerator />
                        </Section>
                </>
        )
}
