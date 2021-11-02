import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
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
        <Container>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    services.map(service => <Service service={service} key={service.img} >

                    </Service>)
                }
            </Grid>
            </Box>
        </Container>
    );
};

export default Services;