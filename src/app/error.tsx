"use client";

import { unstable_ViewTransition as ViewTransition } from "react";
import { useEffect } from "react";
import styles from "@/styles/pages/error.module.scss";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const handleReturnHome = () => {
    window.location.href = "/";
  };

  return (
    <ViewTransition>
      <div className={styles.errorContainer}>
        <div className={styles.errorCard}>
          <h2 className={styles.title}>Algo salió mal</h2>
          <p className={styles.message}>{error.message}</p>
          <button className={styles.retryButton} onClick={handleReturnHome}>
            Volver al Inicio
          </button>
        </div>
      </div>
    </ViewTransition>
  );
}
