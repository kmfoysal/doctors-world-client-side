import React from 'react';
import Services from '../Services/Services';
import Navigation from '../Shared/Navigation/Navigation';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import HeroArea from './HeroArea/HeroArea';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HeroArea></HeroArea>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;