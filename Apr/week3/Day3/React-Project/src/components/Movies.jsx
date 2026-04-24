import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate } from 'react-router'

const MOVIE_API = import.meta.env.VITE_OMDB_API;
const FULL_API = MOVIE_API + import.meta.env.VITE_OMDB_API_KEY;
function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [search, setSearch] = useState()

  async function getMovies(searchData = "all") {
    try {
      setLoading(true)
      const res = await axios.get(FULL_API + `&s=${searchData}`);
      setMovies(res.data.Search);
    } catch (error) {
      toast.error("failed to fetch")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleSearch()
  }, [])

  function handleSearch() {
    getMovies(search)
  }

  return (
    <div className='max-w-7xl mx-auto p-3 '>
      <div className='space-x-1'>
        <input
          type="search"
          placeholder='Search a movie'
          className='w-[90%] border p-3 rounded-md'
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className='p-3 bg-red-500 rounded-md' onClick={handleSearch}>Search</button>
      </div>
      {loading ?
        (<p>Loading ......</p>) :
        (
          <div className='grid grid-cols-4 gap-3 mt-20'>
            {
              movies?.map((movie) => (
                <div className='p-2 shadow-xs shadow-amber-500' key={movie.imdbID}>
                  <div className=''>
                    <img src={movie.Poster} alt={movie.Title} className='h-full hover:scale-105 cursor-pointer transition duration-700' />
                  </div>
                  <p>Title : {movie.Title}</p>
                  <p>Type :{movie.Type}</p>
                  <p>Year :{movie.Year}</p>
                  <div className='text-center'>
                    <button
                      onClick={() => navigate(`/movie/${movie.imdbID}`)}
                      className=' w-full p-2 bg-amber-700 text-white rounded-xl hover:bg-amber-300 cursor-pointer'>View Detail</button>
                  </div>
                </div>
              ))
            }
          </div>)
      }
    </div>
  )
}

export default Movies