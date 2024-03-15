import { Alert, Slide } from "@mui/material";
import { Container } from "./styledAlerts";

export const OutlinedAlerts = ({ type, text }) => {
    return (
        <Container spacing={2}>
            {type ? (
                <Slide direction="down" in={true} mountOnEnter unmountOnExit>
                    <Alert
                        sx={{
                            color: type === "success" ? "rgb(0 169 8)" :
                                type === "info" ? "rgb(10 161 230)" :
                                    type === "warning" ? "rgb(182 108 3)" :
                                        type === "error" ? "rgb(195 25 22)" : "inherit"
                        }}
                        variant="outlined"
                        severity={type}>
                        {text}
                    </Alert>
                </Slide>
            ) : null}
        </Container>
    );
}
