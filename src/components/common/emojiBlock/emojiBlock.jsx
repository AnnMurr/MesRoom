import { useEffect, useState } from "react";
import { EMOJI, fetchEmojiData } from "../../../consts/emoji";
import { v4 as uuid } from "uuid";
import { EmojiBlockContainer, EmojiList } from "./styledEmojiBlock";
import { EmojiItem } from "./components/emojiItem";

export const EmojiBlock = ({ selectEmoji, emojiBlockRef, type }) => {
    const [emojiFromApi, setEmojiFromApi] = useState(null);

    const getEmoji = async () => {
        try {
            const dataEmoji = await fetchEmojiData();
            setEmojiFromApi(dataEmoji)
        } catch (error) {
            console.error('Failed to fetch:', error);
        }
    }

    useEffect(() => {
        getEmoji();
    }, []);

    return (
        <EmojiBlockContainer type={type} ref={emojiBlockRef}>
            <EmojiList>
                {emojiFromApi ?
                    emojiFromApi.map((data) => (
                        <EmojiItem
                            key={uuid()}
                            selectEmoji={selectEmoji}
                            data={data.character} />
                    )) :
                    EMOJI &&
                    EMOJI.map((data) => (
                        <EmojiItem
                            key={uuid()}
                            selectEmoji={selectEmoji}
                            data={data} />
                    ))
                }
            </EmojiList>
        </EmojiBlockContainer>
    )
}