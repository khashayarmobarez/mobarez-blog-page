import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, Typography } from '@mui/material';

const CardEl = ({title, urlSlug, picsOrMedia, author}) => {
    return (
        <Grid item xs={12} sm={6} md={4} >
            <Card sx={{boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px', borderRadius:3 }}>
                {
                    author && (
                        <CardHeader avatar={<Avatar src={author.avatar.url} />}
                        title={<Typography component='p' variant='p' color='text.secondary' fontSize={16} fontFamily='League Spartan'>{author.name}</Typography>} />
                    )
                }
                <CardMedia component="img"
                 sx={{ width: '100%',height: '170px', objectFit: 'fill' }}
                src={picsOrMedia.url}
                alt={urlSlug} /> 

                <CardContent>
                    <Typography component='p' variant='p' color='text.primary' fontWeight={500}>
                        {title}
                    </Typography>
                </CardContent>
                <Divider variant='middle'/>

                <CardActions >
                    <Link to={`/blogs/${urlSlug}`} style={{textDecoration: 'none', width:'100%' }}>
                        <Button variant="outlined" size='small' sx={{width:'100%'}} color='secondary'>reading the blog</Button>
                    </Link>
                </CardActions>

            </Card>
        </Grid>
    ); 
};

export default CardEl;