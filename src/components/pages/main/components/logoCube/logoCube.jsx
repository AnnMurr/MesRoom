import * as React from 'react';
import { useRef, useState } from 'react';
import { Cube, FaceBack, FaceBottom, FaceFront, FaceLeft, FaceRight, FaceTop } from './styledLogoCube';

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
        <div
            ref={sceneRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}>
            <Cube ref={cubeRef}>
                <FaceFront>
                    <img src="https://i.imgur.com/y7bK6CD.png" alt="Front" />
                </FaceFront>
                <FaceBack>
                    <img src="https://i.imgur.com/y7bK6CD.png" alt="Back" />
                </FaceBack>
                <FaceTop>
                    <img src="https://i.imgur.com/DF214xg.png" alt="Top" />
                </FaceTop>
                <FaceBottom>
                    <img src="https://i.imgur.com/DF214xg.png" alt="Bottom" />
                </FaceBottom>
                <FaceLeft>
                    <img src="https://i.imgur.com/ctelnv0.png" alt="Left" />
                </FaceLeft>
                <FaceRight>
                    <img src="https://i.imgur.com/ctelnv0.png" alt="Right" />
                </FaceRight>
            </Cube>
        </div>
    );
};