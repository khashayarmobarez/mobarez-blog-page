import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Blogs from '../components/Blog/Blogs';
import Authors from '../components/Author/Authors';

const HomePage = () => {
    return (
        <Container maxWidth='lg'>

            <Grid container spacing={2}>

                <Grid item xs={12} md={4} mt={4}>
                    <Typography component='h2' variant='h5' mb={3} fontFamily='League Spartan' color='primary'>
                        authors
                    </Typography>
                    <Authors />
                </Grid>

                <Grid item xs={12} md={8} mt={4} >
                    <Typography component='h2' variant='h5' mb={3} fontFamily='League Spartan' color='primary'>
                        blogs
                    </Typography>
                    <Blogs />
                </Grid>


            </Grid>

        </Container>
    );
};

export default HomePage;