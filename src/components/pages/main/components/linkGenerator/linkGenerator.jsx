import React, { useState } from "react";
import { Button } from "../../../../common/button/button";
import { LinkBlock } from "./components/link";
import { OutlinedAlerts } from "../../../../common/alerts/alerts";
import { Wrapper, BtnInner, Container } from "./styledLinkGenerator";
import { useLocation } from "react-router-dom";

export const LinkGenerator = ({ isLink, setIsLink }) => {
    const [isSuccessAlert, setIsSuccessAlert] = useState(false);
    const [isErrorAlert, setIsErrorAlert] = useState(false);
    const location = useLocation();

    const onGenerateLink = async () => {
        try {
            const response = await fetch(`https://messchat-service.onrender.com/room`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url: location.pathname }),
            });

            if (!response.ok) throw new Error('Failed to generate link');

            const { link } = await response.json();
            setIsLink(link);
        } catch (error) {
            console.error('Failed to fetch:', error);
        }
    };

    return (
        <Container>
            <Wrapper>
                <BtnInner>
                    <Button size={"big"} func={onGenerateLink} text={"Generate link"} />
                </BtnInner>
                <LinkBlock isLink={isLink} setIsSuccessAlert={setIsSuccessAlert} setIsErrorAlert={setIsErrorAlert} />
                {isSuccessAlert ?
                    <OutlinedAlerts type={"success"} text={"The link has been successfully copied"} />
                    : null}
                {isErrorAlert ?
                    <OutlinedAlerts type={"error"} text={"Error copying text"} />
                    : null}
            </Wrapper>
        </Container>
    );
};
