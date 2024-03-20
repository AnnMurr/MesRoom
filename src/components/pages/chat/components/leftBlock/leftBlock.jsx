import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsersOnline } from "../../../../../redux/redusers/userReduser";
import { Item } from "./components/item";
import { socket } from "../../../../../socket/socket";
import { v4 as uuid } from "uuid";
import { OutlinedAlerts } from "../../../../common/alerts/alerts";
import { blockPreviousPage } from "../../../../../utils/blockPreviousPage";
import { Container, OnlineTitle } from "./styledLeftBlock";

export const LeftBlock = () => {
    const [isErrorAlert, setIsErrorAlert] = useState(false);
    const { usersOnline } = useSelector(state => state.chatData)
    const dispatch = useDispatch();

    useEffect(() => {
        blockPreviousPage();

        socket.on("usersOnline", (users) => dispatch(setUsersOnline(users)));
        socket.on("CHANGED-USERDATA", (data) => dispatch(setUsersOnline(data)));
    }, [dispatch]);

    return (
        <Container>
            <div>
                <OnlineTitle>Online:</OnlineTitle>
                <ul>
                    {usersOnline &&
                        usersOnline.map((userData) => (
                            <Item
                                key={uuid()}
                                setIsErrorAlert={setIsErrorAlert}
                                userData={userData} />
                        ))}
                </ul>
                {isErrorAlert ?
                    <OutlinedAlerts type={"error"} text={"This emoji has already taken"} />
                    : null}
            </div>
        </Container>
    )
}