import * as React from 'react';
import { useRef, useState } from 'react';
import {
    Cube,
    FaceBack,
    FaceBottom,
    FaceFront,
    FaceLeft,
    FaceRight,
    FaceTop,
    Wrapper
} from './styledLogoCube';

const cubeGreySide = require("../../../../../assets/images/cubeGreySide.png");
const cubeGreenSide = require("../../../../../assets/images/cubeGreenSide.png");
const cubeBackSide = require("../../../../../assets/images/cubeBlackSide.png");

export const LogoCube = () => {
    const sceneRef = useRef(null);
    const cubeRef = useRef(null);
    const [isMouseOver, setIsMouseOver] = useState(false);

    const handleMouseEnter = () => {
        setIsMouseOver(true);
        cubeRef.current.style.animation = "none";
    };

    const handleMouseLeave = () => {
        setIsMouseOver(false);
        cubeRef.current.style.animation = "rotate 10s infinite linear";
    };

    const handleMouseMove = (event) => {
        if (isMouseOver) {
            const sceneRect = sceneRef.current.getBoundingClientRect();
            const mouseX = event.clientX - sceneRect.left;
            const mouseY = event.clientY - sceneRect.top;
            const cubeX = sceneRect.width / 2;
            const cubeY = sceneRect.height / 2;
            const angleX = -(mouseY - cubeY) / 10;
            const angleY = (mouseX - cubeX) / 10;
            cubeRef.current.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        }
    };

    return (
        <Wrapper
            ref={sceneRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}>
            <Cube ref={cubeRef}>
                <FaceFront>
                    <img src={cubeGreenSide} alt="Front" />
                </FaceFront>
                <FaceBack>
                    <img src={cubeGreenSide} alt="Back" />
                </FaceBack>
                <FaceTop>
                    <img src={cubeGreySide} alt="Top" />
                </FaceTop>
                <FaceBottom>
                    <img src={cubeGreySide} alt="Bottom" />
                </FaceBottom>
                <FaceLeft>
                    <img src={cubeBackSide} alt="Left" />
                </FaceLeft>
                <FaceRight>
                    <img src={cubeBackSide} alt="Right" />
                </FaceRight>
            </Cube>
        </Wrapper>
    );
};