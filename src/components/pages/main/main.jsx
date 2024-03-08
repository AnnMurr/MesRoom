import { Button } from '../../common/button/button.jsx';
import { Container, BtnInner } from './mainStyled.js';

export const Main = () => {
        return (
                <Container>
                        <BtnInner to={"/generator"}>
                                <Button size={"big"} text={"Get started"} />
                        </BtnInner>
                </Container>
        )
}