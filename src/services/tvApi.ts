import { RawTmdbSeries, Series, SeriesResponse } from "@/types/series";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchSeries = async (
  page: number = 1
): Promise<SeriesResponse> => {
  const response = await fetch(
    `${BASE_URL}/tv/popular?language=es-ES&page=${page}&api_key=${API_KEY}`
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
        : "/public/coming-soon.svg",
      summary: item.overview || undefined,
      genres: [],
      premiered: item.first_air_date || undefined,
    })),
    total_pages: 500,
    total_results: data.total_results,
  };
};

export const fetchSeriesById = async (id: string): Promise<Series> => {
  const response = await fetch(
    `${BASE_URL}/tv/${id}?language=es-ES&api_key=${API_KEY}`
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

export const fetchSimilarSeries = async (
  seriesId: string
): Promise<Series[]> => {
  const response = await fetch(
    `${BASE_URL}/tv/${seriesId}/similar?language=es-ES&api_key=${API_KEY}`
  );
  if (!response.ok) throw new Error("Error fetching similar series");
  const data = await response.json();
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

export const fetchRecommendedSeries = async (
  seriesId: string
): Promise<Series[]> => {
  const response = await fetch(
    `${BASE_URL}/tv/${seriesId}/recommendations?language=es-ES&api_key=${API_KEY}`
  );
  if (!response.ok) throw new Error("Error fetching recommended series");
  const data = await response.json();
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

export const searchSeries = async (
  query: string,
  page: number = 1
): Promise<SeriesResponse> => {
  const response = await fetch(
    `${BASE_URL}/search/tv?query=${encodeURIComponent(
      query
    )}&language=es-ES&page=${page}&api_key=${API_KEY}`
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
