import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Wrapper, Btn, BtnInner, LinkWrapper, CopyBtn } from "./styledLinkGenerator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { getCopyText } from "../../../utils/copyText";

export const LinkGenerator = () => {
    const [isCopyBtnClick, getIsCopyBtnClick] = useState(false)
    const stateFromRedux = useSelector((state) => state.user.userName);
    const linkRef = useRef(null)


    const onCopy = () => {
        getIsCopyBtnClick(true)
        setTimeout(() => getIsCopyBtnClick(false), 100)
    }
    return (
        <Wrapper>
            <BtnInner>
                <Btn>Generate link</Btn>
            </BtnInner>
            <LinkWrapper>
                <div ref={linkRef} >link djlsajd dmlasdmlasmd</div>
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
        </Wrapper>
    );
};
