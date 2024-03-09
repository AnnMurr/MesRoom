import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Container, Icon, Item } from "./styledMessageSettings";

export const MessageSettings = () => {
    return (
        <Container>
            <div>
                <Item>
                    <Icon><FontAwesomeIcon color="#fff" icon={faPen} /></Icon> <span>Edit</span>
                </Item>
                <Item>
                    <Icon><FontAwesomeIcon color="#fff" icon={faTrashCan} /></Icon> <span>Delete</span>
                </Item>
            </div>
        </Container>
    )
}