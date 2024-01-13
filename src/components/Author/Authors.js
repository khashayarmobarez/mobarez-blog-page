import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_AUTHORS_INFO } from '../../Graphql/queries';
import { Avatar, Divider, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import Loader from '../shared/Loader'

const Authors = () => {

    const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);

    
    if(loading) return <Loader />
    
    if(errors) return <h3>errors...</h3>

    
    const {authors} = data;
    // this(upper) variabale should be before the data return 

    return (
        <Grid container sx={{boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px', borderRadius:3,flexDirection:'column', mt:2 }} spacing={2}>
            {authors.map(
                (author,index) => (
                    <React.Fragment key={author.id}>
                        <Grid item sx={{display: 'flex', alignItems: 'center' }}>
                            <Link to={`/Authors/${author.slug}`} style={{textDecoration: 'none', width:'100%',display: 'flex', alignItems: 'center' }}>
                                <Avatar src={author.avatar.url} />
                                <Typography component='p' variant='p' color='text.secondary' fontWeight={500} sx={{pl: 2}}>{author.name}</Typography>
                            </Link>
                        </Grid>
                        {index !== author.length - 1 && (
                            <Grid item>
                                <Divider variant='middle'/>
                            </Grid> 
                        )}
                    </React.Fragment>
                )
            )}
        </Grid>
    );
};

export default Authors;