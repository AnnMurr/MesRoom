import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";
import { getCopyText } from "../../../../../../utils/copyText";
import { CopyBtn, LinkWrapper, TitleLink } from "./styledLink";

export const LinkBlock = ({ isLink, setIsSuccessAlert, setIsErrorAlert }) => {
    const [isCopyBtnClick, setIsCopyBtnClick] = useState(false);

    const onCopy = async () => {
        setIsCopyBtnClick(true);
        setTimeout(() => setIsCopyBtnClick(false), 2000);

        try {
            await getCopyText(isLink);
            setIsSuccessAlert(true);
            setTimeout(() => setIsSuccessAlert(false), 3000);
        } catch (error) {
            setIsErrorAlert(true);
            setTimeout(() => setIsErrorAlert(false), 3000);
            console.error(error);
        }
    };

    return (
        <LinkWrapper style={{ visibility: isLink ? "visible" : "hidden" }}>
            <div>
                <TitleLink>Link:</TitleLink>
            </div>
            <div style={{ padding: "0 15px 0 25px" }}>
                <span style={{ width: "fit-content", wordWrap: "break-word" }}>{isLink.slice(0, 50)}...</span>
            </div>
            <div>
                <CopyBtn onClick={onCopy} type="button">
                    {!isCopyBtnClick ? <FontAwesomeIcon size="xl" icon={faCopy} /> :
                        <FontAwesomeIcon size="xl" icon={faCheck} />
                    }
                </CopyBtn>
            </div>
        </LinkWrapper>
    )
}