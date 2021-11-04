import { Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { flexbox } from '@mui/system';
import React from 'react';
import bg from '../../../images/doctor.png';
import './AppointmentBanner.css';


// const bgImg = {
//     backgroundImage : `url(${appointmentBg})`,
//     // backgroundSize : `cover`,
//     // backgroundPosition : `center`
// }

const AppointmentBanner = () => {
    return (
        <div className='bgImg'>
            <Container>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid  xs={12} sm={5} md={4} sx={{display:flexbox, justifyContent:'center'}}>
                        <img src={bg} alt="bg" style={{width:'100%', height:'490px', marginTop:'-110px', objectFit:'cover', display:'flex'}}/>
                    </Grid>
                    <Grid  xs={12} sm={7} md={8} sx={{py:5}}>
                        <Typography variant='h6' sx={{color:'#1CD8D2', fontFamily:'montserrat', mb:2}}>
                            APPOINTMENT
                        </Typography>
                        <Typography variant='h3' sx={{fontSize:'42px', fontWeight:'500', color:'#fff', fontFamily:'montserrat', lineHeight:'1.2', mb:2}}>
                            Make an Appointment <br/>
                            Today
                        </Typography>
                        <Typography variant='body1' sx={{color:'#f7f7f7', fontFamily:'montserrat', lineHeight:1.7, mb:3}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolor cum, nostrum similique nulla perferendis odio asperiores natus ipsa consectetur!
                        </Typography>
                        <Button variant='contained' size='large' sx={{backgroundImage:'linear-gradient(133deg, #19d3ae 0%, #0fcfec 100%)'}}>Learn More</Button> 
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AppointmentBanner;