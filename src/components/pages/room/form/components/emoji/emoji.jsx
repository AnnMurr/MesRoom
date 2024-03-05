import { useState } from "react";
import { EMOJI } from "../../../../../../consts/consts";
import { Emoji, EmojiBlock, EmojiList, EmojiItemBtn, EmojiItem } from "./styledEmoji";
import { v4 as uuid } from "uuid";

export const EmojiComponent = () => {
    const [userEmoji, setUserEmoji] = useState("\u{1F60A}")

    const selectEmoji = (e) => {
        e.preventDefault()
        setUserEmoji(e.target.textContent)
    }

    return (
        <>
            <Emoji>
                {userEmoji}
            </Emoji>
            <EmojiBlock>
                <EmojiList>
                    {EMOJI &&
                        EMOJI.map((emoji) => (
                            <EmojiItem key={uuid()}>
                                <EmojiItemBtn onClick={selectEmoji}>
                                    {emoji}
                                </EmojiItemBtn>
                            </EmojiItem>
                        ))}
                </EmojiList>
            </EmojiBlock>
        </>
    )
}