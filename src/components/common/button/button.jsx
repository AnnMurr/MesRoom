import { Btn } from "./styledButton";

export const Button = ({ text, func, size }) => {
    return (
        <Btn size={size} onClick={func}>{text}</Btn>
    )
}