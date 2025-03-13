import styles from "@/styles/components/footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Series Explorer. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
