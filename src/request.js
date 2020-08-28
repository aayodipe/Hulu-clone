
    const API_KEY = "API_KEY_GOES_HERE"
   export default {
      fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en_US`,
      fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
      fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
      fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
      fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
      fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
      fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
      fetchScifi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
      fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
      fetchAnimaton: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
      fetchHome: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
     
  }
