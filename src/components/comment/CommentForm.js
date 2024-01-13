    import React, { useState } from 'react';
    import { Button, Grid, TextField, Typography } from '@mui/material';

    import { toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
    import { useMutation } from '@apollo/client';
    import { SEND_COMMENTS } from '../../Graphql/mutations';

    const CommentForm = ({urlSlug}) => {
        
        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [comment, setComment] = useState('')

        const [sendComment, {loading, data, error}] = useMutation(SEND_COMMENTS, {
            variables: {name, email, comment, urlSlug} 
        })
        
        const sendHandler = async () => {   
            try {
                if (name && email && comment) {
                    await sendComment(); // Wait for the mutation to complete
                    toast.success('your comment was sent and will be submitted after a review', {
                        position: 'top-center',
                        autoClose: 4000,
                    });
                } else {
                    toast.warning('Fill in all the sections', {
                        position: 'top-center',
                        autoClose: 4000,
                    });
                }
            }
             catch (error) {
                console.error('Error sending comment:', error);
                toast.error('An error occurred. Please try again.', {
                    position: 'top-center',
                    autoClose: 4000,
                });
            }
        };


        return (
            <Grid container sx={{boxShadow:'rgba(0,0,0,0.3) 2px 4px 12px', borderRadius:4, p:3 , mt:8 }}>
                <Grid item xs={12}>
                    <Typography color='primary' variant='p' component='h3' fontWeight='600'>Comment here</Typography>
                </Grid>
                <Grid item xs={12} marginTop={1.5}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" sx={{width:'100%'}} value={name} onChange={(e) => setName(e.target.value)}/>
                </Grid>
                <Grid item xs={12} marginTop={1.5}>
                    <TextField id="outlined-basic" label="email" variant="outlined" sx={{width:'100%'}} value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Grid>
                <Grid item xs={12} marginTop={1.5}>
                    <TextField id="outlined-basic" label="Your Comment" variant="outlined" sx={{width:'100%'}} minRows={4} multiline value={comment} onChange={(e) => setComment(e.target.value)}/>
                </Grid>
                {
                    loading ? 
                    <Button variant="contained" sx={{fontFamily:'roboto',mt: 2}} disabled >submitting...</Button> :
                    <Button variant="contained" sx={{fontFamily:'roboto',mt: 2}} onClick={sendHandler}>submit</Button>
                }
            </Grid>
        );
    };

    export default CommentForm;