import styles from "@/styles/components/loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.loadingText}>Cargando...</p>
    </div>
  );
}
