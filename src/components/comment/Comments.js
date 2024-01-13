import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_COMMENTS } from '../../Graphql/queries';
import { Avatar, Card, CardContent, Grid, Skeleton, Typography } from '@mui/material';

const Comments = ({urlSlug}) => {

    const { loading, data, error } = useQuery(GET_COMMENTS,
        {variables: {urlSlug}})

        console.log(data)

        if(loading) return null

        if(error) return <h3>error..</h3>

    return (
        <Grid container xs={12} sx={{display:'flex', flexDirection:'column', alignItems:'center', mt: 4, padding:5, boxShadow:'rgba(0,0,0,0.3) 2px 4px 12px', borderRadius:4}}>
                <Typography component='p' variant='h6' fontWeight={600} color='primary' alignSelf='flex-start' fontFamily='Spartan League'>Comments</Typography>
            {   data?.comments && 
                data.comments.map(comment => 
                    <Card
                    key={comment.id}
                    variant="outlined"
                    sx={{ width: '100%', borderRadius: 3, '--Card-radius': 0 ,mt: 2 }}
                    >
                        <CardContent sx={{display:'flex'}}>
                            <Avatar >{comment.name[0]}</Avatar>
                            <div style={{display:'flex', flexDirection:'column', marginLeft:'1rem'}}>
                            <Typography fontFamily='Spartan League' component='p' variant='h7' fontWeight={400}>{comment.name}</Typography>
                            <Typography fontFamily='Spartan League' component='p' variant='h7' fontWeight={400}>{comment.createdAt.slice(0,10).toLocaleString()}</Typography>
                            </div>
                        </CardContent>
                        <CardContent sx={{ gap: 0.5, mt: 1 }}>
                            <Typography fontFamily='Spartan League' component='p' variant='h6' fontWeight={400}>
                                {comment.comment}
                            </Typography>
                        </CardContent>
                    </Card>
                )
            }
        </Grid>
    );
};

export default Comments;