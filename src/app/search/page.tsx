import { unstable_ViewTransition as ViewTransition } from "react";
import { Metadata } from "next";
import { Suspense } from "react";
import SeriesCard from "@/components/features/SeriesCard";
import { searchSeries } from "@/services/tvApi";
import cardStyles from "@/styles/components/seriesCard.module.scss";
import pageStyles from "@/styles/pages/search.module.scss";
import Loading from "@/components/common/Loading";
import Pagination from "@/components/common/Pagination";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}): Promise<Metadata> {
  const { query } = await searchParams;
  return {
    title: `Buscando "${query || ""}" | Series Explorer`,
    description: `Resultados de búsqueda para "${query || ""}"`,
  };
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const { query, page } = await searchParams;
  const pageNumber = parseInt(page || "1", 10);

  if (!query) {
    return (
      <div className={pageStyles.container}>
        <h1>No se proporcionó un término de búsqueda</h1>
      </div>
    );
  }

  const seriesData = await searchSeries(query, pageNumber);

  return (
    <ViewTransition>
      <div className={pageStyles.container}>
        <h1>Resultados para &quot;{query}&quot;</h1>
        <Suspense fallback={<Loading />}>
          <div className={cardStyles.grid}>
            {!!seriesData.results.length ? (
              seriesData.results.map((series, index) => (
                <SeriesCard key={series.id} series={series} index={index} />
              ))
            ) : (
              <p>No se encontraron series.</p>
            )}
          </div>
          {seriesData.total_pages !== 1 && (
            <Pagination
              currentPage={seriesData.page}
              totalPages={seriesData.total_pages}
              basePath="/search"
              query={query}
            />
          )}
        </Suspense>
      </div>
    </ViewTransition>
  );
}
