import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Container maxWidth='lg'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Link to={`/`} style={{textDecoration:'none', color:'white'}}>
              <HomeOutlinedIcon fontSize='large' />
            </Link>
            <Typography variant="h6" component="div" fontSize={22} fontWeight={600} >
                Mobarez blog page
            </Typography>
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}