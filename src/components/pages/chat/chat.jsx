import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setChatMessages } from "../../../redux/redusers/userReduser";
import { socket } from "../../../socket/socket";
import { LeftBlock } from "./components/leftBlock/leftBlock";
import { RightBlock } from "./components/rightBlock/rightBlock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { LoadingPage } from "../loading/loading";
import { getDataFromSessionStorage } from "../../../store/sessionStorage";
import { Burger, Container, Section, Wrapper } from "./styledChat";

export const Chat = () => {
    const [isLoad, setIsLoad] = useState(true);
    const [isLeftBlock, setIsLeftBlock] = useState(true);
    const [isBurger, setIsBurger] = useState(false);
    const [isCloseBtn, setIsCloseBtn] = useState(false);
    const leftBlockRef = useRef(null);
    const burgerRef = useRef(null);
    const closeBtnRef = useRef(null);
    const dispatch = useDispatch();
    const { id, name, userEmoji } = getDataFromSessionStorage("userData");
    const windowWidth = window.innerWidth;

    useEffect(() => {
        if (windowWidth <= 768) {
            setIsLeftBlock(false);
            setIsBurger(true);
            setIsCloseBtn(true);
        };

        setTimeout(() => setIsLoad(false), 4000);

        socket.emit("ROOM:JOIN", { roomId: id, userName: { name: name, icon: userEmoji ? userEmoji : userEmoji } });
        socket.on("chatMessages", (messages) => dispatch(setChatMessages(messages)));
        socket.on("changed-messages", (messages) => dispatch(setChatMessages(messages)));

        const handleUnload = () => socket.emit("ROOM:LEAVE", {
            roomId: id,
            userName: {
                name: name,
                icon: userEmoji
            }
        });

        window.addEventListener("beforeunload", handleUnload);

        return () => {
            window.removeEventListener("beforeunload", handleUnload);

           
        };
    }, [windowWidth, dispatch, id, name, userEmoji]);

    const closeLeftBlock = () => {
        leftBlockRef.current.classList.add("hide");
        setTimeout(() => {
            setIsLeftBlock(false)
            leftBlockRef.current.classList.remove("hide");
        }, 600);
        window.removeEventListener("click", closeLeftBlockByClickOutside);
    }

    const closeLeftBlockByClickOutside = (event) => {
        if (leftBlockRef.current &&
            burgerRef.current &&
            closeBtnRef.current &&
            !leftBlockRef.current.contains(event.target) &&
            !burgerRef.current.contains(event.target) &&
            !closeBtnRef.current.contains(event.target)) {
            closeLeftBlock();
        }
    }

    const openLeftBlock = () => {
        setIsLeftBlock(true);
        window.addEventListener("click", closeLeftBlockByClickOutside);
    }

    return (
        <Section>
            <Container>
                {isLoad ? <LoadingPage /> : null}
                <Wrapper>
                    {isBurger ?
                        <Burger ref={burgerRef} onClick={openLeftBlock} type="button">
                            <FontAwesomeIcon size="xl" color="white" icon={faBars} />
                        </Burger>
                        : null}
                    {isLeftBlock ?
                        <LeftBlock
                            isCloseBtn={isCloseBtn}
                            closeLeftBlock={closeLeftBlock}
                            leftBlockRef={leftBlockRef}
                            setIsLeftBlock={setIsLeftBlock}
                            closeBtnRef={closeBtnRef}
                            isLeftBlock={isLeftBlock} />
                        : null}
                    <RightBlock />
                </Wrapper>
            </Container>
        </Section>
    )
}