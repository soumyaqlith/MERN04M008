import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { toast } from 'react-toastify';

const MOVIE_API = import.meta.env.VITE_OMDB_API;
const FULL_API = MOVIE_API + import.meta.env.VITE_OMDB_API_KEY;

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  async function getMovieDetail() {
    try {
      const res = await axios.get(FULL_API + `&i=${id}`);
      console.log(res.data)
      setMovie(res.data)
    } catch (error) {
      toast.error("failed to fetch")
    } finally {
    }
  }

  useEffect(() => {
    getMovieDetail()
  }, [])
  return (
    <div>Movie detais
      <br />
      <img src={movie.Poster} alt="" />
      {movie.Title}
    </div>
  )
}

export default Movie