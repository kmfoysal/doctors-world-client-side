import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import chair from '../../../images/chair.png';
import './HeroArea.css';


const HeroArea = () => {
    return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={2} sx={{mt:0}}>
        <Grid item xs={8} className='heroBg'>
            <div style={{width:'50%', margin:'0 auto'}}>
                <Typography variant='h3' sx={{fontSize:'50px', fontWeight:'700', color:'#202020', fontFamily:'montserrat', lineHeight:'1.4', mb:2}}>
                    Your New Smile <br/>
                    Starts Here
                </Typography>
                <Typography variant='body1' sx={{color:'#666', fontFamily:'montserrat', lineHeight:1.7, mb:3}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolor cum, nostrum similique nulla perferendis odio asperiores natus ipsa consectetur!
                </Typography>
                <Button variant='contained' size='large' sx={{backgroundImage:'linear-gradient(to right,#93EDC7,#1CD8D2)'}}>GET APPOINTMENT</Button> 
            </div>
        </Grid>
        <Grid item xs={4} sx={{backgroundColor:'#2E4053', display:'flex', alignItems:'center'}}>
          <img src={chair} alt="img-chair" style={{width:'100%', marginLeft:'-50%'}} />
        </Grid>
      </Grid>
    </Box>
    );
};

export default HeroArea;