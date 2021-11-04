import { Button, TextField } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import React from 'react';


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

    const handleBookingSubmit = e =>{ 
        alert('Submitted Successfully')
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
                // size='small'
                sx={{width:'100%', mb:2}} />

                <TextField 
                // defaultValue='Please enter your name'
                id="outlined-basic" 
                label="Your Name" 
                variant="outlined" 
                // size='small'
                sx={{width:'100%', mb:2}} />

                <TextField 
                // defaultValue='Please enter your email'
                id="outlined-basic" 
                label="Your Email" 
                variant="outlined" 
                // size='small'
                sx={{width:'100%', mb:2}} />
                
                <TextField 
                // defaultValue='Please enter your phone number'
                id="outlined-basic" 
                label="Your Phone Number" 
                variant="outlined" 
                // size='small'
                sx={{width:'100%', mb:2, ":focus":{color:'#19d3ae'}}} />

                <TextField
                disabled 
                defaultValue={date.toDateString()}
                id="outlined-basic" 
                label="Date" 
                variant="outlined" 
                // size='small'
                sx={{width:'100%', mb:2}} />

                <Button type='submit' variant='contained' size='large' sx={{backgroundImage:'linear-gradient(133deg, #19d3ae 0%, #0fcfec 100%)', width:'100%'}}>SUBMIT</Button>

            </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;