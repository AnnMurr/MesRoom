import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { LogoCube } from './components/logoCube/logoCube.jsx';
import { LinkGenerator } from './components/linkGenerator/linkGenerator';
import { LaptopBlock } from './components/laptopBlock/laptopBlock.jsx';
import { CircularIndeterminate } from '../../common/loading/loading.jsx';
import { CUBE_GREY_SIDE, CUBE_GREEN_SIDE, CUBE_BACK_SIDE } from '../../../consts/images.js';
import { Section, Title } from './mainStyled.js';

export const Main = () => {
        const { scrollY } = useScroll();
        const laptopImageRef = useRef(null);
        const sectionLaptopRef = useRef(null);
        const sectionLink = useRef(null);
        const titleRef = useRef(null);

        const [laptopDistance, setlaptopDistance] = useState(null);
        const [titleDistance, setTitleDistance] = useState(null);
        const [isLoading, setIsLoading] = useState(true);
        const [isLink, setIsLink] = useState('');

        const titleScale = useTransform(scrollY, [titleDistance, 2000], [1, 8]);

        useEffect(() => {
                updateDistance();

                if (CUBE_GREY_SIDE && CUBE_GREEN_SIDE && CUBE_BACK_SIDE) setIsLoading(false);
        }, []);

        const updateDistance = () => {
                const result = sectionLaptopRef.current.offsetTop * 1.2;
                setlaptopDistance(result);
                setTitleDistance(titleRef.current.offsetTop);
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
                        setIsLink('');
                }
        }

        const toggleBlockVisibility = () => {
                const sectionLaptopTop = sectionLaptopRef.current.offsetTop;
                const isOpacity = window.scrollY >= sectionLaptopTop;
                laptopImageRef.current.style.visibility = isOpacity ? "visible" : "hidden";
        }

        window.addEventListener("scroll", () => {
                const bodyHeight = document.body.offsetHeight;
                const windowHeight = window.innerHeight;

                toggleBlockVisibility();
                hideLaptop(windowHeight, bodyHeight);
                hideSectionLink(windowHeight, bodyHeight);
        });

        return (
                <>
                        <Section>
                                {!isLoading ?
                                        <LogoCube
                                                cubeGreySide={CUBE_GREY_SIDE}
                                                cubeGreenSide={CUBE_GREEN_SIDE}
                                                cubeBackSide={CUBE_BACK_SIDE} /> :
                                        <CircularIndeterminate />}
                        </Section>
                        <Section ref={sectionLaptopRef}>
                                <Title ref={titleRef} style={{ scale: titleScale }}>
                                        <span>Mess Chat</span>
                                </Title>
                                <LaptopBlock laptopImageRef={laptopImageRef} laptopDistance={laptopDistance} />
                        </Section>
                        <Section ref={sectionLink}>
                                <LinkGenerator isLink={isLink} setIsLink={setIsLink} />
                        </Section>
                </>
        )
}
