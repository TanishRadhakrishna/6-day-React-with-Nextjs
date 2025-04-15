const API_KEY = process.env.TMDB_API_KEY;

export const fetchMovies = async (query: string) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data.results.map((movie: any) => ({
    id: movie.id,
    title: movie.title,
    poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    year: movie.release_date?.split('-')[0],
    rating: movie.vote_average,
    overview: movie.overview
  }));
};
