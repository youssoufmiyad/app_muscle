import React from 'react'
import { Box, Stack, Typography, Link } from '@mui/material'

import Logo from '../assets/images/Logo-2.png'
const Footer = () => {
  return (
    <Box mt="80px" bgcolor={"#fff"}>
      <Stack gap="40px" alignItems='center' px="40px" pt="24px" bgcolor={"#FFDB49"}>
        <img src={Logo} alt="logo" width={'200px'} height={"40px"}/>
        <Typography mt='5px'>
        <Link underline="none" color="ButtonHighlight" style={{ textDecoration: 'none', color: '#000000', borderBottom: '3px solid #000000', fontSize: "12px", fontWeight: "700" }}>
        <a href='https://www.linkedin.com/in/miyad-youssouf-ali-1ba879289'>Linkedin</a>
        </Link>
        </Typography>
      </Stack>
    </Box >
  )
}

export default Footer