import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking, date, setAppointmentSuccessMsg}) => {
    const {name, time, space} = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);

    return (

        <Grid item xs={12} sm={6} md={4} sx={{textAlign:'center'}}>
            <Paper elevation={3} sx={{p:3}}>
                <Typography variant='h5' sx={{color:'#1CD8D2', fontFamily:'montserrat', mb:2, fontWeight:500}}>
                  {name}
                </Typography>
                <Typography variant='h6' sx={{color:'#202020', fontFamily:'montserrat', mb:2, fontWeight:700}}>
                  {time}
                </Typography>
                <Typography variant='body1' sx={{color:'#666', fontFamily:'montserrat', mb:2}}>
                  {space}
                </Typography>
                <Button onClick={handleBookingOpen} variant='contained' size='large' sx={{backgroundImage:'linear-gradient(133deg, #19d3ae 0%, #0fcfec 100%)'}}>BOOK APPOINTMENT</Button>
            </Paper>
            <BookingModal
            booking={booking}
            openBooking={openBooking}
            handleBookingClose={handleBookingClose}
            setAppointmentSuccessMsg={setAppointmentSuccessMsg}
            date={date}
            ></BookingModal>
        </Grid>
        
    );
};

export default Booking;