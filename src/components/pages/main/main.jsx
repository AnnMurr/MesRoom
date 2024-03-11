import { Button } from '../../common/button/button.jsx';
import { LogoCube } from './components/logoCube/logoCube.jsx';
import { Container, BtnInner } from './mainStyled.js';

export const Main = () => {
        return (
                <Container>
                        <LogoCube />

                        {/* <BtnInner to={"/generator"}>
                                <Button size={"big"} text={"Get started"} />
                        </BtnInner> */}
                </Container>
        )
}