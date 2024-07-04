import React, { useStaet, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Castwrapper = styled.div`
padding: 20px;

h1 {
font - size: 24px;
margin-bottom: 10px;
}
ul {
list-style: none;
padding: 0;
display:flex;
flex-wrap: wrap;
}

li {
font-size: 16px;
margin-right: 20px;
margin-bottom: 20px;
flex: 0 0 calc(33.3333% - 40px);
}

img {
width: 150px;
height: auto;
border-radius: 5px;
margin-bottom: 10px;
}
`;

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState ([];

        useEffect(() => {
            axios
            .get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
                params:
            })
        })
    )
}
pa