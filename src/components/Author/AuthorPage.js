import React from 'react';
import { useQuery } from '@apollo/client';
import sanitizeHtml from 'sanitize-html'
import { useParams } from 'react-router-dom';

import { GET_AUTHOR_INFO } from '../../Graphql/queries';
import { Avatar, Container, Grid, Typography } from '@mui/material';
import CardEl from '../shared/CardEl';
import Loader from '../shared/Loader';


const AuthorPage = () => {

    const { slug } = useParams()

    const {loading, data, error} = useQuery(GET_AUTHOR_INFO, 
        {variables:{slug}}
        )

        if(loading) return <Loader/>

        if(error) return <h3>errors</h3>

        const {author} = data

        return (
            <Container maxWidth='lg'>
                <Grid container sx={{display:'flex', flexDirection:'column', width: '100%', alignItems: 'center'}}>
                    <Grid item xs={12} mt={2}>
                        <Avatar src={author.avatar.url} sx={{width:250, height:250}} mt={2}/>
                        <Typography variant="h2" component="h2" fontSize={22} fontWeight={600} mt={2}>{author.name}</Typography>
                        <Typography variant="p" component="p" fontSize={22} color={Text.secondary} mt={1}>{author.workField}</Typography>
                    </Grid>
                    <Grid item xs={12} mt={2}>
                        <div style={{fontSize: '120%'}} dangerouslySetInnerHTML={{ __html: sanitizeHtml(author.description.html) }}></div>
                    </Grid>
                    <Grid container spacing={2} sx={{display:'flex', flexDirection:'column'}} mt={2}>
                        <Typography variant="h2" component="h2" fontSize={22} fontWeight={600} mb={2}>articles</Typography>
                        <Grid item sx={{display:'flex', justifyContent:'space-between'}} >
                            {author.authorArticles.map(article => 
                            <CardEl key={article.id} title={article.title} urlSlug={article.urlSlug} picsOrMedia={article.picsOrMedia} />)}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        );
};

export default AuthorPage;