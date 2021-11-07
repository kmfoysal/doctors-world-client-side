import { Button, TextField } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "320px",
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
  };

const BookingModal = ({openBooking, handleBookingClose,booking, date}) => {
    const {name, time} = booking;

    const {user} = useAuth();

    const initialInfo = {patientName:user.displayName, email:user.email, phone:''}

    const [appointmentsInfo, setAppointmentsInfo] = useState(initialInfo);

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...appointmentsInfo}
        newInfo[field] = value;
        setAppointmentsInfo(newInfo);
    }

    const handleBookingSubmit = e =>{ 
        // Collect Data 
        const appointment = {
          ...appointmentsInfo,
          time,
          serviceName: name,
          date : date.toLocaleDateString()
        }

        // Send to the Server 
        fetch('http://localhost:5000/appointments', {
            method:'POST',
            headers:{
              'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })

        handleBookingClose()
        e.preventDefault();
    }
    
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h5" sx={{mb:3, textAlign:'center', color:'#19d3ae'}}>
              {name}
            </Typography>
            <form onSubmit={handleBookingSubmit}>
                <TextField 
                disabled
                defaultValue={time}
                id="outlined-basic" 
                label="Time" 
                variant="outlined"
                sx={{width:'100%', mb:2}} />

                <TextField 
                id="outlined-basic" 
                label="Your Name" 
                defaultValue={user.displayName}
                name='patientName'
                onBlur={handleOnBlur}
                variant="outlined"
                sx={{width:'100%', mb:2}} />

                <TextField 
                id="outlined-basic" 
                label="Your Email" 
                defaultValue={user.email}
                onBlur={handleOnBlur}
                name='email'
                variant="outlined"
                sx={{width:'100%', mb:2}} />
                
                <TextField 
                id="outlined-basic" 
                label="Your Phone Number" 
                variant="outlined"
                name='phone'
                onBlur={handleOnBlur}
                sx={{width:'100%', mb:2, ":focus":{color:'#19d3ae'}}} />

                <TextField
                disabled 
                defaultValue={date.toDateString()}
                id="outlined-basic" 
                label="Date" 
                variant="outlined" 
                sx={{width:'100%', mb:2}} />

                <Button type='submit' variant='contained' size='large' sx={{backgroundImage:'linear-gradient(133deg, #19d3ae 0%, #0fcfec 100%)', width:'100%'}}>SUBMIT</Button>

            </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;