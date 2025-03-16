import { unstable_ViewTransition as ViewTransition } from "react";
import { Metadata } from "next";
import { Suspense } from "react";
import SeriesDetail from "@/components/features/SeriesDetail";
import SeriesCard from "@/components/features/SeriesCard";
import {
  fetchRecommendedSeries,
  fetchSeriesById,
  fetchSimilarSeries,
} from "@/services/tvApi";
import cardStyles from "@/styles/components/seriesCard.module.scss";
import pageStyles from "@/styles/pages/seriesDetail.module.scss";
import Loading from "@/components/common/Loading";
import { Series } from "@/types/series";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  try {
    const series = await fetchSeriesById(id);
    return {
      title: `${series.name} | Series Explorer`,
      description: series.summary?.slice(0, 150) || "Detalles de la serie",
    };
  } catch {
    return {
      title: "Error | Series Explorer",
      description: "No se pudo cargar los detalles de la serie.",
    };
  }
}

export default async function SeriesPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [series, similarSeries, recommendedSeries] = await Promise.all([
    fetchSeriesById(id).catch(() => null),
    fetchSimilarSeries(id),
    fetchRecommendedSeries(id),
  ]);

  if (!series) {
    throw new Error("No se pudo cargar la serie solicitada.");
  }

  return (
    <ViewTransition>
      <div className={pageStyles.container}>
        <SeriesDetail series={series} />
        {!!similarSeries.length && (
          <Suspense fallback={<Loading />}>
            <SeriesSection
              title="Series Similares"
              seriesList={similarSeries}
              className={pageStyles.section}
            />
          </Suspense>
        )}
        {!!recommendedSeries.length && (
          <Suspense fallback={<Loading />}>
            <SeriesSection
              title="Series Recomendadas"
              seriesList={recommendedSeries}
              className={pageStyles.section}
            />
          </Suspense>
        )}
      </div>
    </ViewTransition>
  );
}

async function SeriesSection({
  title,
  seriesList,
  className,
}: {
  title: string;
  seriesList: Series[];
  className?: string;
}) {
  return (
    <section className={className}>
      <h2>{title}</h2>
      <div className={cardStyles.grid}>
        {seriesList.map((series, index) => (
          <SeriesCard key={series.id} series={series} index={index} />
        ))}
      </div>
    </section>
  );
}
