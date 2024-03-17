import { useMemo } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { EditDetails, EditableMessage, Inner } from "./styledEditDetails";

export const EditDetailsBlock = ({ closeEditing }) => {
    const { userMessage } = useSelector(state => state.chatData);
    const memoizedMessage = useMemo(() => userMessage, []);

    return (
        <EditDetails>
            <Inner>
                <div>
                    <h5>Edit Message</h5>
                </div>
                <div >
                    <EditableMessage>{memoizedMessage}</EditableMessage>
                </div>
            </Inner>
            <button onClick={closeEditing}>
                <FontAwesomeIcon
                    size="lg"
                    color="#bebcb9"
                    icon={faCircleXmark} />
            </button>
        </EditDetails>
    )
}