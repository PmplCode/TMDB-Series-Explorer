export interface Series {
  id: number;
  name: string;
  image?: { medium: string; original: string };
  summary?: string;
  genres: string[];
  premiered?: string;
  seasons?: number;
  episodes?: number;
  rating?: number;
  status?: string;
}

export interface SeriesResponse {
  page: number;
  results: Series[];
  total_pages: number;
  total_results: number;
}

export interface RawTmdbSeries {
  id: number;
  name: string;
  poster_path?: string;
  overview?: string;
  first_air_date?: string;
  genre_ids: number[];
  adult?: boolean;
  backdrop_path?: string;
  origin_country?: string[];
  original_language?: string;
  original_name?: string;
  popularity?: number;
  vote_average?: number;
  vote_count?: number;
}
