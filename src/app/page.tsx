import { fetchSeries } from "@/services/tvApi";
import { Suspense } from "react";
import pageStyles from "@/styles/pages/home.module.scss";
import cardStyles from "@/styles/components/seriesCard.module.scss";
import { SeriesResponse } from "@/types/series";
import SeriesCard from "@/components/features/SeriesCard";
import Loading from "@/components/common/Loading";
import Pagination from "@/components/common/Pagination";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = parseInt(page || "1", 10);
  const seriesDataPromise = fetchSeries(currentPage);

  return (
    <div className={pageStyles.container}>
      <h1>Series Populares</h1>
      <Suspense fallback={<Loading />}>
        <SeriesList
          seriesDataPromise={seriesDataPromise}
          currentPage={currentPage}
        />
      </Suspense>
    </div>
  );
}

async function SeriesList({
  seriesDataPromise,
  currentPage,
}: {
  seriesDataPromise: Promise<SeriesResponse>;
  currentPage: number;
}) {
  const { results: series, total_pages } = await seriesDataPromise;

  return (
    <>
      <div className={cardStyles.grid}>
        {series.map((s) => (
          <SeriesCard key={s.id} series={s} />
        ))}
      </div>
      <Pagination totalPages={total_pages} currentPage={currentPage} />
    </>
  );
}
