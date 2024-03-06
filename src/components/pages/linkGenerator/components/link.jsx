import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";
import { getCopyText } from "../../../../utils/copyText";
import { CopyBtn, LinkWrapper, TitleLink } from "./styledLink";

export const Link = ({ isLink }) => {
    const [isCopyBtnClick, setIsCopyBtnClick] = useState(false);

    const onCopy = () => {
        setIsCopyBtnClick(true);
        setTimeout(() => setIsCopyBtnClick(false), 2000);
        getCopyText(isLink);
    };

    return (
        <LinkWrapper>
            <div>
                <TitleLink>Link:</TitleLink>
            </div>
            <div>
                <span>{isLink}</span>
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