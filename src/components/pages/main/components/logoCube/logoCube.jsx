import * as React from 'react';
import './cube.css'
import { useRef, useState } from 'react';

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
            className="scene"
            ref={sceneRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}>
            <div className="cube" ref={cubeRef}>
                <div className="face front">
                    <img src="https://i.imgur.com/y7bK6CD.png" alt="Front" />
                </div>
                <div className="face back">
                    <img src="https://i.imgur.com/y7bK6CD.png" alt="Back" />
                </div>
                <div className="face top">
                    <img src="https://i.imgur.com/DF214xg.png" alt="Top" />
                </div>
                <div className="face bottom">
                    <img src="https://i.imgur.com/DF214xg.png" alt="Bottom" />
                </div>
                <div className="face left">
                    <img src="https://i.imgur.com/ctelnv0.png" alt="Left" />
                </div>
                <div className="face right">
                    <img src="https://i.imgur.com/ctelnv0.png" alt="Right" />
                </div>
            </div>
        </div>
    );
};