const API_KEY = "09b53b52c6571f10831dde15264bb96a";

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchPopular: `/tv/popular?api_key=${API_KEY}&with_networks=213`,
  fetchTvDrama: `/discover/tv?api_key=${API_KEY}&with_genre=18&with_networks=213&page=2`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_networks=213&with_genres=28,12&page=2`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_networks=213&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_networks=213&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_networks=213&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default requests;
