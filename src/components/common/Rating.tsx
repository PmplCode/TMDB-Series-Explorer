import styles from "@/styles/components/rating.module.scss";

export default function StarRating(rating: number) {
  const starRating = rating / 2;
  const fullStars = Math.floor(starRating);
  const hasHalfStar = starRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={styles.starRating}>
      <div className={styles.stars}>
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className={styles.star}>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className={styles.starIcon}
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </span>
        ))}

        {hasHalfStar && (
          <span className={styles.star}>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className={styles.starIcon}
            >
              <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
            </svg>
          </span>
        )}

        {[...Array(emptyStars)].map((_, i) => (
          <span
            key={`empty-${i}`}
            className={`${styles.star} ${styles.emptyStar}`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className={styles.starIcon}
            >
              <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
            </svg>
          </span>
        ))}
      </div>
      <span className={styles.ratingValue}>{rating.toFixed(1)}</span>
    </div>
  );
}
