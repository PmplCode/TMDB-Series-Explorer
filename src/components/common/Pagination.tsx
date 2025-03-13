import Link from "next/link";
import styles from "@/styles/components/pagination.module.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
  query?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath = "/",
  query = "",
}: PaginationProps) {
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  const buildUrl = (page: number) => {
    const params = new URLSearchParams();
    if (query) params.set("query", query);
    params.set("page", page.toString());
    return `${basePath}?${params.toString()}`;
  };

  return (
    <div className={styles.pagination}>
      {prevPage && (
        <Link
          href={buildUrl(prevPage)}
          className={`${styles.pageLink} ${styles.prevLink}`}
        >
          <span className={styles.arrow}>←</span>
        </Link>
      )}

      <div className={styles.pageNumbers}>
        {currentPage > 2 && (
          <>
            <Link href={buildUrl(1)} className={styles.pageNumber}>
              1
            </Link>
            {currentPage > 3 && <span className={styles.ellipsis}>...</span>}
          </>
        )}

        {currentPage > 1 && (
          <Link href={buildUrl(currentPage - 1)} className={styles.pageNumber}>
            {currentPage - 1}
          </Link>
        )}

        <span className={`${styles.pageNumber} ${styles.current}`}>
          {currentPage}
        </span>

        {currentPage < totalPages && (
          <Link href={buildUrl(currentPage + 1)} className={styles.pageNumber}>
            {currentPage + 1}
          </Link>
        )}

        {currentPage < totalPages - 1 && (
          <>
            {currentPage < totalPages - 2 && (
              <span className={styles.ellipsis}>...</span>
            )}
            <Link href={buildUrl(totalPages)} className={styles.pageNumber}>
              {totalPages}
            </Link>
          </>
        )}
      </div>

      {nextPage && (
        <Link
          href={buildUrl(nextPage)}
          className={`${styles.pageLink} ${styles.nextLink}`}
        >
          <span className={styles.arrow}>→</span>
        </Link>
      )}
    </div>
  );
}
