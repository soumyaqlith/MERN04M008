import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'

const MOVIE_API = import.meta.env.VITE_OMDB_API;
const FULL_API = MOVIE_API + import.meta.env.VITE_OMDB_API_KEY + "&s=all";
function Movies() {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    try {
      const res = await axios.get(FULL_API);
      setMovies(res.data.Search);
    } catch (error) {
      toast.error("failed to fetch")
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div>Movies</div>
  )
}

export default Movies