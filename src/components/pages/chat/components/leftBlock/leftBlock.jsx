import { v4 as uuid } from "uuid";
import { Container, OnlineTitle } from "./styledLeftBlock";

export const LeftBlock = ({ usersOnline }) => {
    return (
        <Container>
            <div>
                <OnlineTitle>Online:</OnlineTitle>
                <ul>
                    {usersOnline &&
                        usersOnline.map((userData) => (
                            <li key={uuid()}>
                                <span>{userData.icon}</span> {userData.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </Container>
    )
}