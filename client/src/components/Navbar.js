import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png'
const Navbar = () => {
    return (
        <Stack direction="row"
            justifyContent="space-around"
            sx={{ gap: { sm: '40px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
            <Link to="/">
                <img src={Logo} alt='logo' style={{
                    width: '48px', height: '48px', margin:
                        '0px'
                }} />
            </Link>
            <Stack direction="row"
                gap="30px"
                fontFamily="Alegreya"
                fontSize="24px"
                alignItems="flex-end">
                <Link to="/" style={{ textDecoration: 'none', color: '#000000', borderBottom: '3px solid #000000', fontSize: "40px", fontWeight: "700" }}>Home</Link>
                <a href="#exercises" style={{ textDecoration: 'none', color: '#000000', fontSize: "30px", fontWeight: "700" }}>Exercises</a>
                <Link to="/login" style={{ textDecoration: 'none', color: '#000000', fontSize: "30px", fontWeight: "700" }}>Sign in</Link>
            </Stack>

        </Stack>
    )
}

export default Navbar