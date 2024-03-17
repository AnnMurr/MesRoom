import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Btn, Inner, Icon, Text } from "./styledItem";

export const Item = ({ func, icon, text }) => {
    return (
        <Inner>
            <Btn onClick={func}>
                <Icon>
                    <FontAwesomeIcon size="sm" color="#fff" icon={icon} />
                </Icon>
                <Text>{text}</Text>
            </Btn>
        </Inner>
    )
}