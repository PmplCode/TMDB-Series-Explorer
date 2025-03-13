"use client";

import { unstable_ViewTransition as ViewTransition } from "react";
import { Series } from "@/types/series";
import Link from "next/link";
import styles from "@/styles/components/seriesCard.module.scss";
import Image from "next/image";
interface SeriesCardProps {
  series: Series;
}

export default function SeriesCard({ series }: SeriesCardProps) {
  return (
    <ViewTransition name={`series-container-${series.id}`}>
      <Link href={`/series/${series.id}`} className={styles.card}>
        <ViewTransition name={`series-image-${series.id}`}>
          <div className={styles.imageWrapper}>
            <Image
              src={series.image?.medium || "/coming-soon.svg"}
              alt={series.name}
              className={styles.image}
              width={300}
              height={300}
            />
          </div>
        </ViewTransition>
        <ViewTransition name={`series-name-${series.id}`}>
          <h3 className={styles.title}>{series.name}</h3>
        </ViewTransition>
      </Link>
    </ViewTransition>
  );
}
