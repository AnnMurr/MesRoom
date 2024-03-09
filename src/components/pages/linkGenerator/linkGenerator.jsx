import React, { useState } from "react";
import { Button } from "../../common/button/button";
import { Link } from "./components/link";
import { Wrapper, BtnInner } from "./styledLinkGenerator";
import { OutlinedAlerts } from "../../common/alerts/alerts";

export const LinkGenerator = () => {
    const [isLink, setIsLink] = useState('');
    const [isSuccessAlert, setIsSuccessAlert] = useState(false);
    const [isErrorAlert, setIsErrorAlert] = useState(false);

    const onGenerateLink = async () => {
        try {
            const response = await fetch('http://localhost:1234/room', {
                method: 'POST',
                headers: { 'Content-Type': 'aplication/json' },
                body: JSON.stringify({}),
            });

            if (!response.ok) throw new Error('Failed to generate link');

            const { link } = await response.json();
            setIsLink(link);
        } catch (error) {
            console.error('Failed to fetch:', error);
        }
    };

    return (
        <Wrapper>
            <BtnInner>
                <Button size={"big"} func={onGenerateLink} text={"Generate link"} />
            </BtnInner>
            {isLink && (<Link isLink={isLink} setIsSuccessAlert={setIsSuccessAlert} setIsErrorAlert={setIsErrorAlert} />)}
            {isSuccessAlert ?
                <OutlinedAlerts type={"success"} text={"The link has been successfully copied"} />
                : null}
            {isErrorAlert ?
                <OutlinedAlerts type={"error"} text={"Error copying text"} />
                : null}
        </Wrapper>
    );
};
