import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const AppointmentsDetails = ({date}) => {
    const [appointmentsDetails, setAppointmentsDetails] = useState([])
    const {user} = useAuth();

    useEffect(()=>{
        const url = `http://localhost:5000/appointmentsdetails?email=${user.email}&date=${date}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setAppointmentsDetails(data))
    },[date])
    return (
        <div>
            <h2>Appointments : {appointmentsDetails.length}</h2>

            <TableContainer component={Paper}>
                <Table sx={{ }} aria-label="appointments details table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell >Time</TableCell>
                            <TableCell >Service</TableCell>
                            <TableCell >Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {appointmentsDetails.map((row) => (
                        <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.patientName}
                        </TableCell>
                        <TableCell>{row.time}</TableCell>
                        <TableCell>{row.serviceName}</TableCell>
                        <TableCell>{}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>   
        </div>
    );
};

export default AppointmentsDetails;