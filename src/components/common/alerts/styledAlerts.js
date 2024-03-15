import { Stack } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Stack)`
    width: fit-content;
    position: fixed;
    top: 5px;
    max-width: 50%;
    right: 5px;

    @media screen and (max-width: 490px) {
        max-width: 100%;
    }
`;
