import { CardActionArea, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';

const Service = (props) => {

     const {name, description, img} = props.service;

    return (
            <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 345, textAlign: 'center' }}>
                <CardActionArea sx={{pt:'20px'}}>
                    <CardMedia
                    component="img"
                    style={{width:'auto', height: '80px', margin: '0 auto'}}
                    image={img}
                    alt="img"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>     
            </Grid>
    );
};

export default Service;