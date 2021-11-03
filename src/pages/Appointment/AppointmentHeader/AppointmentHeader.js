import { Container, Grid } from '@mui/material';
import React from 'react';
import Calender from '../../Shared/Calender/Calender';

const AppointmentHeader = () => {
    return (
        <Container>
            <Grid container spacing={2} sx={{mt:0}}>
                <Grid item xs={12} md={6}>
                    <Calender></Calender>
                </Grid>
                <Grid item xs={12} md={6}></Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;