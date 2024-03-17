import { useEffect, useState } from "react";
import { Item } from "./components/item";
import { socket } from "../../../../../socket/socket";
import { v4 as uuid } from "uuid";
import { OutlinedAlerts } from "../../../../common/alerts/alerts";
import { blockPreviousPage } from "../../../../../utils/blockPreviousPage";
import { Container, OnlineTitle } from "./styledLeftBlock";

export const LeftBlock = () => {
    const [usersOnline, setUsersOnline] = useState([]);
    const [isErrorAlert, setIsErrorAlert] = useState(false);

    useEffect(() => {
        blockPreviousPage();

        socket.on("usersOnline", (users) => setUsersOnline(users));
        socket.on("CHANGED-USERDATA", (data) => setUsersOnline(data));
    }, []);

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