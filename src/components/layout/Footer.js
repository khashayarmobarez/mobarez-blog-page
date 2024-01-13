import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box>
            <Typography
                sx={{ bgcolor: '#fff5ee', color: 'primary' ,mt: '12rem', textAlign:'center', padding:'2rem'}}
                variant='p'
                component='p'
            >
                webblog project with GraphQL | Khashayar Mobarez
            </Typography>
        </Box>
    );
};

export default Footer;
