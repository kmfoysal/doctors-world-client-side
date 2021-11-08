import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const AvailableAppointments = ({date}) => {

    const [appointmentSuccessMsg, setAppointmentSuccessMsg] = useState(false);

    const availableBookings = [
        {id:1,
         name: 'Preventative Dentistry',
         time: '10:00 am - 11:00 am',
         space: '10 space available'
        },
        {id:2,
        name: 'Costmetic Dentistry',
        time: '11:00 am - 12:00 am',
        space: '5 space available'
        },
        {id:3,
        name: 'Orthodontics',
        time: '9:00 am - 10:00 am',
        space: '13 space available'
        },
        {id:4,
        name: 'Tooth Whitening',
        time: '3:00 pm - 4:00 pm',
        space: '20 space available'
        },
        {id:5,
        name: 'Emergency Dental Care',
        time: '10:00 am - 11:00 am',
        space: '11 space available'
        },
        {id:6,
        name: 'Dental Implants',
        time: '10:00 am - 11:00 am',
        space: '6 space available'
        }
    ]
    return (
     <Container>
          <Typography variant='h4' sx={{color:'#1CD8D2', fontFamily:'montserrat', mb:2, fontWeight:500,textAlign:'center'}}>
             Available Appointments On {date.toDateString()}
          </Typography>
          {
              appointmentSuccessMsg && <Alert severity="success">Booked Appointment Successfully</Alert>
          }
         <Grid container spacing={4} sx={{mt:0}}>
             {
                 availableBookings.map(booking => <Booking 
                                       key={booking.id}
                                       booking={booking}
                                       date={date}
                                       setAppointmentSuccessMsg={setAppointmentSuccessMsg}
                                       ></Booking>)
             }
         </Grid>
     </Container>
    );
};

export default AvailableAppointments;