import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [successMsg, setSuccessMsg] = useState(false);

    const handleMakeAdminSubmit = e =>{
        const user ={email};
        fetch('https://thawing-tor-57287.herokuapp.com/users/admin', {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.modifiedCount){
                setSuccessMsg(true)
                console.log(data);
            }
        })


        e.preventDefault();
    }

    const handleOnBlur = e =>{

        setEmail(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleMakeAdminSubmit}>
            <TextField 
                required
                label="Email" 
                variant="standard"
                type='email'
                name='email'
                onBlur={handleOnBlur}
                sx={{width:'100%', mb:4}}
                    />
            
            <Button 
                variant='contained' 
                size='large'
                type='submit'
                sx={{backgroundImage:'linear-gradient(133deg, #19d3ae 0%, #0fcfec 100%)', width:'100%', mb:3}}>Make Admin</Button>
            </form>
            {
              successMsg && <Alert severity="success">Made Admin Successfully</Alert>
                       }
        </div>
    );
};

export default MakeAdmin;