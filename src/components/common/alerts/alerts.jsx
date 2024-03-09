import { Alert, Slide, Stack } from "@mui/material";

export const OutlinedAlerts = ({ type, text }) => {
    return (
        <Stack
            sx={{
                width: '100%',
                position: "fixed",
                top: "5px",
                maxWidth: "18%",
                right: "5px",
            }}
            spacing={2}>
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
        </Stack>
    );
}
