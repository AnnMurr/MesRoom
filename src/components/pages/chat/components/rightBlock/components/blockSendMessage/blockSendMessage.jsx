import { useState } from "react";
import { EditDetailsBlock } from "./components/editDetails/editDetails";
import { Input } from "./components/input/input";
import { Wrapper } from "./styledBlockSendMessage";

export const BlockSendMessage = ({
    setMessage,
    message,
    isEditing,
    setIsEditing,
    setChatMessages }) => {

    const [initialHeight, setInitialHeight] = useState('33px');

    const closeEditing = () => {
        setIsEditing(false);
        setInitialHeight('33px');
        setMessage("");
    }

    return (
        <div>
            {isEditing ?
                <EditDetailsBlock message={message} closeEditing={closeEditing} />
                : null}
            <Wrapper>
                <Input
                    setMessage={setMessage}
                    message={message}
                    isEditing={isEditing}
                    setChatMessages={setChatMessages}
                    setIsEditing={setIsEditing}
                    setInitialHeight={setInitialHeight}
                    initialHeight={initialHeight} />
            </Wrapper>
        </div>
    )
}