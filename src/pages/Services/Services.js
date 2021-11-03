import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import cavity from '../../images/cavity.png';
import fluoride from '../../images/fluoride.png';
import whitening from '../../images/whitening.png';
import Service from '../Home/Service/Service';



const services = [
    {
        name : 'Fluoride Treatment',
        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquid eius quidem harum ab quas, similique sit voluptas quaerat eos',
        img : fluoride
    },

    {
        name : 'Cavity Filling',
        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquid eius quidem harum ab quas, similique sit voluptas quaerat eos',
        img : cavity
    },

    {
        name : 'Teeth Whitening',
        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquid eius quidem harum ab quas, similique sit voluptas quaerat eos',
        img : whitening
    }
]

const Services = () => {
    return (
            <Box sx={{ flexGrow: 1,  textAlign: 'center', py:6 }}>
               <Container>
                    <Typography sx={{mb:'20px', fontWeight:700, color: '#1CD8D2'}} variant='h6' component='div'>
                        OUR SERVICES
                    </Typography>
                    <Typography sx={{mb:'50px', fontWeight:700}} variant='h3' component='div'>
                        Services We Provide
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            services.map(service => <Service service={service} key={service.img} >

                            </Service>)
                        }
                    </Grid>
               </Container>
            </Box>
    );
};

export default Services;