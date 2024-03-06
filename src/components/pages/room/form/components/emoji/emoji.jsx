import { EMOJI } from "../../../../../../consts/consts";
import { v4 as uuid } from "uuid";
import { Emoji, EmojiBlock, EmojiList, EmojiItemBtn, EmojiItem } from "./styledEmoji";

export const EmojiComponent = ({ userEmoji, setUserEmoji }) => {
    const selectEmoji = (e) => {
        e.preventDefault();
        setUserEmoji(e.target.textContent);
    };

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