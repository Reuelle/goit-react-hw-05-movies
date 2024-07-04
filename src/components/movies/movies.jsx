import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MoviesWrapper = styled.div`
  padding: 20px;
`;

const MovieItem = styled.li`
  font-size: 18px;
  margin-bottom: 20px;
  width: calc(33.33% - 20px);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  a {
    text-decoration: none;
    color: #333;
    display: block;
    text-align: center;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 10px;
    display: block;
  }

  span {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/search/movie',
        {
          params: {
            api_key: '23f77f1a7852117720a48008d2ea32a0',
            query: searchTerm,
          },
        }
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <MoviesWrapper>
      <h1>Search Movies</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map(movie => (
          <MovieItem key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : 'замінний-шлях'
                }
                alt={movie.title}
              />
              <span>{movie.title}</span>
            </Link>
          </MovieItem>
        ))}
      </ul>
    </MoviesWrapper>
  );
};

export default Movies;
