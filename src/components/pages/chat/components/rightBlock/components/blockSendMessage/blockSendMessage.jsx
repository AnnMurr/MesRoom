import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserMessage } from "../../../../../../../redux/redusers/userReduser";
import { EditDetailsBlock } from "./components/editDetails/editDetails";
import { Input } from "./components/input/input";
import { Wrapper } from "./styledBlockSendMessage";

export const BlockSendMessage = ({ isEditing, setIsEditing }) => {
    const [initialHeight, setInitialHeight] = useState('33px');
    const dispatch = useDispatch();

    const closeEditing = () => {
        setIsEditing(false);
        setInitialHeight('33px');
        dispatch(setUserMessage(""));
    }

    return (
        <div>
            {isEditing ?
                <EditDetailsBlock closeEditing={closeEditing} />
                : null}
            <Wrapper>
                <Input
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    setInitialHeight={setInitialHeight}
                    initialHeight={initialHeight} />
            </Wrapper>
        </div>
    )
}