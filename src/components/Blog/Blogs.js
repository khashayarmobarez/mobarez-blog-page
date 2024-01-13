import React from 'react';

import { useQuery } from '@apollo/client';
import { GET_BLOGS_INFO } from '../../Graphql/queries';

import { Grid } from '@mui/material';
import CardEl from '../shared/CardEl';
import Loader from '../shared/Loader';

const Blogs = () => {

    const { loading, data, error } = useQuery(GET_BLOGS_INFO)

    if(loading) return <Loader/>

    if(error) return <h3>errors</h3>

    return (
        <Grid container spacing={2}>
            {
                data.articles.map((article) =>
                    <CardEl key={article.id} {...article} />
                    )
            }

            
        </Grid>
    );
};

export default Blogs;