import { useRef, useState } from "react";
import { FormInner, Input, Wrapper, Container, Section, EmojiItemBtn, Label, EmojiItem, EmojiBlock, EmojiList, Emoji } from "./formStyled";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../common/button/button";
import { EMOJI } from "../../../../consts/consts"

export const Form = () => {
    const [userName, setUserName] = useState("")
    const [userEmoji, setUserEmoji] = useState("\u{1F60A}")
    const navigation = useNavigate()
    const inputRef = useRef(null)
    const pattern = /^[a-zA-Zа-яА-Я]*$/

    const sendData = async (e) => {
        e.preventDefault()

        if (userName.length >= 2 && !userName.includes(" ") && pattern.test(userName)) {
            const id = document.location.href.split('#room/')[1];
            navigation(`/room/${id}/${userName}`)
        } else {
            inputRef.current.style.border = "2px solid #990909ad"
        }
    }

    const selectEmoji = (e) => setUserEmoji(e.target.textContent)
    

    return (
        <Section>
            <Container>
                <Wrapper>
                    <FormInner>
                        <Emoji draggable >{userEmoji}</Emoji>
                        <EmojiBlock>
                            <EmojiList>
                                {EMOJI &&
                                    EMOJI.map((emoji, index) => (
                                        <EmojiItem key={index}>
                                            <EmojiItemBtn onClick={selectEmoji}>
                                                {emoji}
                                            </EmojiItemBtn>
                                        </EmojiItem>
                                    ))}
                            </EmojiList>
                        </EmojiBlock>
                        <Label>
                            <Input
                                ref={inputRef}
                                value={userName}
                                placeholder="Name"
                                onChange={(e) => setUserName(e.target.value)} />
                        </Label>
                        <Button text={"Sign in"} func={sendData} size={"small"} />
                    </FormInner>
                </Wrapper>
            </Container>
        </Section>
    )
}