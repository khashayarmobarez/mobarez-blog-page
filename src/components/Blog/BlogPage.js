import React from 'react';
import { useQuery } from '@apollo/client';
import sanitizeHtml from 'sanitize-html';
import { useNavigate, useParams } from 'react-router-dom';
import { GET_ARTICLE_INFO } from '../../Graphql/queries';
import Loader from '../shared/Loader';
import { Avatar, Container, Grid, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CommentForm from '../comment/CommentForm';
import { ToastContainer } from 'react-toastify';
import Comments from '../comment/Comments';

const BlogPage = () => {

    const { urlSlug } = useParams()

    const navigate = useNavigate()

    const { loading, data, errors } = useQuery(GET_ARTICLE_INFO, {
        variables: { urlSlug }
    })

    if(loading) return <Loader/>

    if(errors) return <h3>errors</h3>

    const { article } = data

    return (
        <Container >
            <Grid container>

                <Grid item xs={12} sx={{display: 'flex', justifyContent:'space-around', alignItems:'center', height:'10rem'}}>
                    <Typography  variant='h4' component='h4' color='primary' fontWeight={500} fontFamily='League Spartan'>{article.title}</Typography>
                    <ArrowBackIcon fontSize='large' color='primary' onClick={() => navigate(-1)} />
                </Grid>

                <Grid item xs={12} sx={{display:'flex', flexDirection:'column', alignItems:'center' }}>
                <img src={article.picsOrMedia.url} alt={article.title}
                    style={{
                        width: '90%',
                        height: '45vh',
                        objectFit: 'fill',
                        borderRadius: '10px',
                        }}/>
                </Grid>

                <Grid item sx={{display:'flex',margin:'3rem 0 1rem 0', alignItems:'center'}}>
                    <Avatar src={article.author.avatar.url} sx={{mr:'1rem', width:'80px', height:'80px',}}/>
                    <div>
                        <Typography variant='h5' component='p'color='secondary' fontWeight={600}>{article.author.name}</Typography>
                        <Typography variant='h7' component='p' color='secondary'>{article.author.workField}</Typography>
                    </div>
                </Grid>

                <Grid item xs={12}>
                    <div style={{fontSize: '140%'}} dangerouslySetInnerHTML={{ __html: sanitizeHtml(article.articleText.html) }}></div>
                </Grid>

                <Grid item xs={12}>
                    <CommentForm urlSlug={urlSlug} />
                </Grid>

                <Grid item xs={12}>
                   <Comments urlSlug={urlSlug}/>  
                </Grid>

            </Grid>
            <ToastContainer />
        </Container>
    );
};

export default BlogPage;