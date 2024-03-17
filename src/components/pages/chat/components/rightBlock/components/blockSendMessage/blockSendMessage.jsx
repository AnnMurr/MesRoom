import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsEditingMessage, setUserMessage } from "../../../../../../../redux/redusers/userReduser";
import { EditDetailsBlock } from "./components/editDetails/editDetails";
import { Input } from "./components/input/input";
import { Wrapper } from "./styledBlockSendMessage";

export const BlockSendMessage = () => {
    const [initialHeight, setInitialHeight] = useState('33px');
    const { isEditingMessage } = useSelector(state => state.chatData);
    const dispatch = useDispatch();

    const closeEditing = () => {
        dispatch(setIsEditingMessage(false));
        setInitialHeight('33px');
        dispatch(setUserMessage(""));
    }

    return (
        <div>
            {isEditingMessage ?
                <EditDetailsBlock closeEditing={closeEditing} />
                : null}
            <Wrapper>
                <Input
                    setInitialHeight={setInitialHeight}
                    initialHeight={initialHeight} />
            </Wrapper>
        </div>
    )
}