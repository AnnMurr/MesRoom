import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { Container, LeftBlock, RightBlock, Section, Wrapper, Message, MessageInner, Input, BlockSendMessage, SendBtn } from "./styledChat";

export const Chat = () => {
    return (
        <Section>
            <Container>
                <Wrapper>
                    <LeftBlock>
                        <div>
                            <h5>Online:</h5>
                        </div>
                    </LeftBlock>

                    <RightBlock>
                        <div>
                            <MessageInner>
                                <Message><span>Lorem ipsum dolor sit amet.</span></Message>
                            </MessageInner>
                            <MessageInner>
                                <Message><span>Lorem ipsum dolor sit amet.</span></Message>
                            </MessageInner>
                            <MessageInner>
                                <Message><span>Lorem ipsum dolor sit amet.</span></Message>
                            </MessageInner>
                        </div>
                        <BlockSendMessage>
                            <Input type="text" />
                            <SendBtn>
                                <FontAwesomeIcon size="xl" color="#55ea47d4" icon={faLocationArrow} />
                            </SendBtn>
                        </BlockSendMessage>
                    </RightBlock>
                </Wrapper>
            </Container>
        </Section>
    )
}