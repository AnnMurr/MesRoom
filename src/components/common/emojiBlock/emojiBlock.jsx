import { useEffect, useState } from "react";
import { EMOJI, fetchEmojiData } from "../../../consts/consts";
import { v4 as uuid } from "uuid";
import { EmojiBlockContainer, EmojiList, EmojiItem, EmojiItemBtn } from "./styledEmojiBlock";

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
                        <EmojiItem key={uuid()}>
                            <EmojiItemBtn onClick={selectEmoji}>
                                {data.character}
                            </EmojiItemBtn>
                        </EmojiItem>
                    )) :
                    EMOJI &&
                    EMOJI.map((data) => (
                        <EmojiItem key={uuid()}>
                            <EmojiItemBtn onClick={selectEmoji}>
                                {data}
                            </EmojiItemBtn>
                        </EmojiItem>
                    ))
                }
            </EmojiList>
        </EmojiBlockContainer>
    )
}