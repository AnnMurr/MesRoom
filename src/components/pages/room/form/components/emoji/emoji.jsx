import { EmojiBlock } from "../../../../../common/emojiBlock/emojiBlock";
import { Emoji } from "./styledEmoji";

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
            <EmojiBlock selectEmoji={selectEmoji} />
        </>
    )
}