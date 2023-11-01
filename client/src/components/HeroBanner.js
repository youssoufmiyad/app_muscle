import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner2.jpg'


const HeroBanner = () => {
    return (
        <Box position="relative" p="90px">
            <Typography color="#D533FF" fontWeight="900" fontSize="26px"
            sx={{
                opacity: 0.3
            }}>
                Fitness Club
            </Typography>
            <Typography fontWeight='900'
                sx={{fontSize: { lg: '70px', xs: '40px' }, opacity: 0.6}}>
                Working out, yes <br /> 
                but STRETCHED OUT !
            </Typography>
            <Typography fontStyle="italic" fontSize="22px" lineHeight="35px" fontWeight='600'mb={3}>
                All of the most challenging exercices are here waiting for YOU
            </Typography>
            <Button variant='outlined'
                color="secondary"
                sx={{ width: "500px", height: "50px" }}
                href='#exercises'>Start</Button>
            <img src={HeroBannerImage} alt='banner'
                    className='hero-banner-img' />
            <Typography
                fontWeight={900}
                color="#D533FF"
                sx={{fontSize: { lg: '160px', xs: '90px' }, opacity: 0.1}}>

                STRETCHED OUT</Typography>


                




        </Box>
    )
}

export default HeroBanner