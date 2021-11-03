import React from 'react';
import Services from '../Services/Services';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import HeroArea from './HeroArea/HeroArea';

const Home = () => {
    return (
        <div>
            <HeroArea></HeroArea>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;