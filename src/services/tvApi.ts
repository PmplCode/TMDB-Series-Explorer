import { RawTmdbSeries, Series, SeriesResponse } from "@/types/series";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

/**
 * Fetches a paginated list of popular TV series from TMDB.
 * @param {number} [page=1] - The page number to fetch (defaults to 1).
 * @returns {Promise<SeriesResponse>} - A promise resolving to the series data, including page metadata and results.
 * @throws {Error} - If the API request fails.
 * @note Limits total_pages to 500 as per TMDB API restrictions.
 */
export const fetchSeries = async (
  page: number = 1
): Promise<SeriesResponse> => {
  const response = await fetch(
    `${BASE_URL}/tv/popular?language=es-ES&page=${page}&api_key=${API_KEY}`,
    { cache: "no-store" }
  );
  if (!response.ok) throw new Error("Error fetching popular series");
  const data = await response.json();
  return {
    page: data.page,
    results: data.results.map((item: RawTmdbSeries) => ({
      id: item.id,
      name: item.name,
      image: item.poster_path
        ? {
            medium: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            original: `https://image.tmdb.org/t/p/original${item.poster_path}`,
          }
        : undefined,
      summary: item.overview || undefined,
      genres: [],
      premiered: item.first_air_date || undefined,
    })),
    total_pages: Math.min(data.total_pages, 500),
    total_results: data.total_results,
  };
};

/**
 * Retrieves detailed information for a specific TV series by its ID from TMDB.
 * @param {string} id - The TMDB series ID.
 * @returns {Promise<Series>} - A promise resolving to the detailed series object.
 * @throws {Error} - If the API request fails or the series is not found.
 */
export const fetchSeriesById = async (id: string): Promise<Series> => {
  const response = await fetch(
    `${BASE_URL}/tv/${id}?language=es-ES&api_key=${API_KEY}`,
    { cache: "no-store" }
  );
  if (!response.ok) throw new Error("Error fetching series details");
  const data = await response.json();
  return {
    id: data.id,
    name: data.name,
    image: data.poster_path
      ? {
          medium: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
          original: `https://image.tmdb.org/t/p/original${data.poster_path}`,
        }
      : undefined,
    summary: data.overview || undefined,
    genres: data.genres ? data.genres.map((g: { name: string }) => g.name) : [],
    premiered: data.first_air_date || undefined,
    seasons: data.number_of_seasons,
    episodes: data.number_of_episodes,
    rating: data.vote_average,
    status: data.status,
  };
};

/**
 * Fetches a list of TV series similar to the specified series from TMDB.
 * @param {string} seriesId - The TMDB series ID to find similar series for.
 * @returns {Promise<Series[]>} - A promise resolving to an array of up to 5 similar series.
 * @throws {Error} - If the API request fails.
 * @note Limits results to 5 for performance and UI simplicity.
 */
export const fetchSimilarSeries = async (
  seriesId: string
): Promise<Series[]> => {
  const response = await fetch(
    `${BASE_URL}/tv/${seriesId}/similar?language=es-ES&api_key=${API_KEY}`,
    { cache: "no-store" }
  );
  const data = response.ok ? await response.json() : { results: [] };
  return data.results.slice(0, 5).map((item: RawTmdbSeries) => ({
    id: item.id,
    name: item.name,
    image: item.poster_path
      ? {
          medium: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          original: `https://image.tmdb.org/t/p/original${item.poster_path}`,
        }
      : undefined,
    summary: item.overview || undefined,
    genres: [],
    premiered: item.first_air_date || undefined,
  }));
};

/**
 * Fetches a list of recommended TV series based on the specified series from TMDB.
 * @param {string} seriesId - The TMDB series ID to get recommendations for.
 * @returns {Promise<Series[]>} - A promise resolving to an array of up to 5 recommended series.
 * @throws {Error} - If the API request fails.
 * @note Limits results to 5 for performance and UI simplicity.
 */
export const fetchRecommendedSeries = async (
  seriesId: string
): Promise<Series[]> => {
  const response = await fetch(
    `${BASE_URL}/tv/${seriesId}/recommendations?language=es-ES&api_key=${API_KEY}`,
    { cache: "no-store" }
  );
  const data = response.ok ? await response.json() : { results: [] };
  return data.results.slice(0, 5).map((item: RawTmdbSeries) => ({
    id: item.id,
    name: item.name,
    image: item.poster_path
      ? {
          medium: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          original: `https://image.tmdb.org/t/p/original${item.poster_path}`,
        }
      : undefined,
    summary: item.overview || undefined,
    genres: [],
    premiered: item.first_air_date || undefined,
  }));
};

/**
 * Searches for TV series on TMDB based on a query string with pagination support.
 * @param {string} query - The search term to query series by.
 * @param {number} [page=1] - The page number to fetch (defaults to 1).
 * @returns {Promise<SeriesResponse>} - A promise resolving to the search results with page metadata.
 * @throws {Error} - If the API request fails.
 */
export const searchSeries = async (
  query: string,
  page: number = 1
): Promise<SeriesResponse> => {
  const response = await fetch(
    `${BASE_URL}/search/tv?query=${encodeURIComponent(
      query
    )}&language=es-ES&page=${page}&api_key=${API_KEY}`,
    { cache: "no-store" }
  );
  if (!response.ok) throw new Error("Error searching series");
  const data = await response.json();
  return {
    page: data.page,
    results: data.results.map((item: RawTmdbSeries) => ({
      id: item.id,
      name: item.name,
      image: item.poster_path
        ? {
            medium: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            original: `https://image.tmdb.org/t/p/original${item.poster_path}`,
          }
        : undefined,
      summary: item.overview || undefined,
      genres: [],
      premiered: item.first_air_date || undefined,
    })),
    total_pages: data.total_pages,
    total_results: data.total_results,
  };
};
