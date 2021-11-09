import { Grid } from '@mui/material';
import React from 'react';
import Calender from '../../Shared/Calender/Calender';
import AppointmentsDetails from '../AppointmentsDetails/AppointmentsDetails';

const DashboardHome = () => {
    
  const [date, setDate] = React.useState(new Date());
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
                <Calender date={date} setDate={setDate}></Calender>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
               <AppointmentsDetails date={date}></AppointmentsDetails>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;