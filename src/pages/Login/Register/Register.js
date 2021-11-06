import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from '../../../images/login.png';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleSubmit = e =>{
        if(loginData.password !== loginData.password2){
           alert('Password Did Not Matched')
           console.log('not matched');
           return;
        }

        alert('Register Successfully')
        e.preventDefault();
    }

    return (
        <Container sx={{}}>
            <Grid container spacing={3} sx={{mt:0}}>
                <Grid item xs={12} md={6} sx={{height:'100vh', display:'flex',justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                <Box sx={{width:'70%',boxShadow:3, p:6, borderRadius:'10px'}}>
                    <Typography variant='h6' sx={{color:'#666', mb:6, textAlign:'center'}}>
                        Please Register
                    </Typography>
                       <form onSubmit={handleSubmit} >
                          <TextField 
                            required
                            label="Email" 
                            variant="standard"
                            type='email'
                            name='email'
                            onChange={handleOnChange}
                            sx={{width:'100%', mb:4}}
                             />

                        <TextField 
                            required
                            label="Password" 
                            variant="standard"
                            onChange={handleOnChange}
                            type='Password'
                            name='password'
                            sx={{width:'100%',mb:4}}
                            />

                        <TextField 
                            required
                            label="Confirm Password" 
                            variant="standard"
                            onChange={handleOnChange}
                            type='Password'
                            name='password2'
                            sx={{width:'100%',mb:4}}
                                />

                           <Button 
                           variant='contained' 
                           size='large'
                           type='submit'
                           sx={{backgroundImage:'linear-gradient(133deg, #19d3ae 0%, #0fcfec 100%)', width:'100%', mb:3}}>Register</Button>
                       </form>

                       <Link to='/login' style={{textDecoration:'none'}} >
                         <Button variant='text' sx={{width:'100%'}} >ALREADY REGISTER ? PLEASE LOGIN</Button>
                       </Link>
                </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{height:'100vh', display:'flex', flexDirection:'column', justifyContent:'flex-end'}}>
                   <img src={login} alt='img' style={{width:'100%'}} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;