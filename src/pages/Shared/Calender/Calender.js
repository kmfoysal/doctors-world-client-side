import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import TextField from '@mui/material/TextField';
import isWeekend from 'date-fns/isWeekend';
import React from 'react';

const Calender = () => {
    return (
        <div>
             <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                    orientation="landscape"
                    openTo="day"
                    value={value}
                    shouldDisableDate={isWeekend}
                    onChange={(newValue) => {
                    setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
             </LocalizationProvider>
        </div>
    );
};

export default Calender;