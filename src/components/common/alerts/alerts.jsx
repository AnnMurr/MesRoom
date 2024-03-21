import { Alert } from "@mui/material";
import { Container } from "./styledAlerts";

export const OutlinedAlerts = ({ type, text }) => {
    return (
        <Container spacing={2}>
            {type ? (
                <Alert
                    variant="filled"
                    severity={type}>
                    {text}
                </Alert>
            ) : null}
        </Container>
    );
}