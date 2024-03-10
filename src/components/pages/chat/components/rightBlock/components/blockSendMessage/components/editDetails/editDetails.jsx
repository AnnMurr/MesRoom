import { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { EditDetails, EditableMessage, Inner } from "./styledEditDetails";

export const EditDetailsBlock = ({ message, closeEditing }) => {
    const memoizedMessage = useMemo(() => message, []);

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