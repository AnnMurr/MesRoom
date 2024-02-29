import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Wrapper, Btn, BtnInner, LinkWrapper, CopyBtn, TitleLink } from "./styledLinkGenerator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { getCopyText } from "../../../utils/copyText";
import { v4 as uuidv4 } from 'uuid';

export const LinkGenerator = () => {
    const [isCopyBtnClick, getIsCopyBtnClick] = useState(false)
    const [isLink, setIsLink] = useState('')
    const stateFromRedux = useSelector((state) => state.user.userName);
    const linkRef = useRef(null)

    const onGenerateLink = () => {
        const link = `http://localhost:3000/#room/${uuidv4()}`
        setIsLink(link)
    }

    const onCopy = () => {
        getIsCopyBtnClick(true)
        setTimeout(() => getIsCopyBtnClick(false), 100)
    }
    return (
        <Wrapper>
            <BtnInner>
                <Btn onClick={onGenerateLink}>Generate link</Btn>
            </BtnInner>
            {isLink ? <LinkWrapper>
                <div>
                    <TitleLink>Link:</TitleLink>
                </div>
                <div>
                    <span ref={linkRef} >  {isLink}</span>
                </div>
                <div>
                    <CopyBtn
                        onClick={() => {
                            onCopy();
                            getCopyText(linkRef.current.textContent);
                        }}
                        type="button" >
                        <FontAwesomeIcon size="xl" color={!isCopyBtnClick ? "#000" : "#9ba0a4bf"} icon={faCopy} />
                    </CopyBtn>
                </div>
            </LinkWrapper>
                : null}
        </Wrapper>
    );
};
