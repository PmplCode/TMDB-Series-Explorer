"use client";

import { useState, unstable_ViewTransition as ViewTransition } from "react";
import { Series } from "@/types/series";
import Link from "next/link";
import styles from "@/styles/components/seriesCard.module.scss";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface SeriesCardProps {
  series: Series;
  index: number;
}

export default function SeriesCard({ series, index }: SeriesCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [imgSrc, setImgSrc] = useState<string>(
    series.image?.medium || "/coming-soon.svg"
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.isVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleImageError = () => {
    setImgSrc("/coming-soon.svg");
  };

  return (
    <ViewTransition name={`series-container-${series.id}`}>
      <Link
        href={`/series/${series.id}`}
        className={styles.card}
        ref={cardRef}
        style={{ "--card-index": index } as React.CSSProperties}
      >
        <ViewTransition name={`series-image-${series.id}`}>
          <div className={styles.imageWrapper}>
            <Image
              src={imgSrc}
              alt={series.name}
              className={styles.image}
              width={200}
              height={300}
              onError={handleImageError}
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
