import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Button } from "../../../../common/button/button";
import { LinkBlock } from "./components/link";
import { OutlinedAlerts } from "../../../../common/alerts/alerts";
import { Wrapper, BtnInner, Container } from "./styledLinkGenerator";
import { getLink } from "../../../../../redux/redusers/linkGenerationReduser";
import { CircularIndeterminate } from "../../../../common/loading/loading";

export const LinkGenerator = ({ isLink, setIsLink }) => {
    const [isSuccessAlert, setIsSuccessAlert] = useState(false);
    const [isErrorAlert, setIsErrorAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const loading = useSelector(state => state.linkData.loading);

    const onGenerateLink = async () => {
        try {
            const action = await dispatch(getLink());
            const link = action.payload;

            link && setIsLink(link);
        } catch (error) {
            console.error('Failed to fetch:', error);
            setIsErrorAlert(true);
            setIsSuccessAlert(false);
        }
    };

    useEffect(() => {
        setIsLoading(loading);
    }, [loading]);

    return (
        isLoading ? <CircularIndeterminate />
            : (
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
            )
    );
};
