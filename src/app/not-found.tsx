"use client";

import { useRouter } from "next/navigation";
import styles from "@/styles/pages/error.module.scss";

export default function Custom404() {
  const router = useRouter();

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorCard}>
        <h1 className={styles.title}>404 - Página no encontrada</h1>
        <p className={styles.message}>
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <button className={styles.retryButton} onClick={() => router.push("/")}>
          Volver al inicio
        </button>
      </div>
    </div>
  );
}
