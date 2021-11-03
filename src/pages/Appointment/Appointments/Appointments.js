import React from 'react';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointments = () => {
    return (
        <div>
            <AppointmentHeader></AppointmentHeader>
            <AvailableAppointments></AvailableAppointments>
        </div>
    );
};

export default Appointments;