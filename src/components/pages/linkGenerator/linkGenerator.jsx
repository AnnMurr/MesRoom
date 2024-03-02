import React, { useState } from "react";
import { Wrapper, BtnInner, LinkWrapper, CopyBtn, TitleLink } from "./styledLinkGenerator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { getCopyText } from "../../../utils/copyText";
import { Button } from "../../common/button/button";

export const LinkGenerator = () => {
    const [isCopyBtnClick, setIsCopyBtnClick] = useState(false);
    const [isLink, setIsLink] = useState('');

    const onGenerateLink = async () => {
        try {
            const response = await fetch('http://localhost:1234/room', {
                method: 'POST',
                headers: { 'Content-Type': 'aplication/json' },
                body: JSON.stringify({}),
            })

            if (!response.ok) throw new Error('Failed to generate link')

            const { link } = await response.json();
            setIsLink(link);
        } catch (err) {
            throw err
        }
    };

    const onCopy = () => {
        setIsCopyBtnClick(true);
        setTimeout(() => setIsCopyBtnClick(false), 100);
        getCopyText(isLink);
    };

    return (
        <Wrapper>
            <BtnInner>
                <Button size={"big"} func={onGenerateLink} text={"Generate link"} />
            </BtnInner>
            {isLink && (
                <LinkWrapper>
                    <div>
                        <TitleLink>Link:</TitleLink>
                    </div>
                    <div>
                        <span>{isLink}</span>
                    </div>
                    <div>
                        <CopyBtn onClick={onCopy} type="button">
                            <FontAwesomeIcon size="xl" color={!isCopyBtnClick ? "#000" : "#9ba0a4bf"} icon={faCopy} />
                        </CopyBtn>
                    </div>
                </LinkWrapper>
            )}
        </Wrapper>
    );
};
