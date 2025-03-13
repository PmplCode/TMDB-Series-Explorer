import { Series } from "@/types/series";
import styles from "@/styles/components/seriesDetail.module.scss";
import Image from "next/image";
import StarRating from "../common/Rating";

interface SeriesDetailProps {
  series: Series;
}

export default function SeriesDetail({ series }: SeriesDetailProps) {
  return (
    <div className={styles.detail}>
      <div className={styles.imageWrapper}>
        <Image
          src={series.image?.original || "/coming-soon.svg"}
          alt={series.name}
          className={styles.image}
          width={300} // Alineado con SCSS
          height={420} // Aproximado para aspect-ratio típico de posters (0.7)
          priority // Carga rápida para imágenes principales
        />
      </div>
      <div className={styles.content}>
        <h1>{series.name}</h1>
        <p
          className={styles.summary}
          dangerouslySetInnerHTML={{
            __html: series.summary || "Sin descripción",
          }}
        />
        <ul className={styles.infoList}>
          <li>
            <strong>Géneros:</strong>{" "}
            {series.genres.length > 0 ? series.genres.join(", ") : "N/A"}
          </li>
          <li>
            <strong>Estreno:</strong> {series.premiered || "N/A"}
          </li>
          <li>
            <strong>Temporadas:</strong> {series.seasons ?? "N/A"}
          </li>
          <li>
            <strong>Episodios:</strong> {series.episodes ?? "N/A"}
          </li>
          <li>
            <strong>Calificación:</strong>{" "}
            {series.rating ? StarRating(series.rating) : "N/A"}
          </li>
          <li>
            <strong>Estado:</strong> {series.status || "N/A"}
          </li>
        </ul>
      </div>
    </div>
  );
}
