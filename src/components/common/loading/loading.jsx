import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Container } from './styledLoading';

export const CircularIndeterminate = () => {
    return (
        <Container sx={{ display: 'flex' }}>
            <CircularProgress sx={{ color: "white" }} />
        </Container>
    );
}