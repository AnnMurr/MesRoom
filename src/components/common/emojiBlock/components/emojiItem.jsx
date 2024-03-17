import { EmojiItemBtn, Item } from "./styledEmojiItem";

export const EmojiItem = ({ data, selectEmoji }) => {
    return (
        <Item>
            <EmojiItemBtn onClick={selectEmoji}>
                {data}
            </EmojiItemBtn>
        </Item>
    )
}