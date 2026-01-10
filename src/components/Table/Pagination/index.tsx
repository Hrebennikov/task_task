import styles from "./Pagination.module.scss";

type Props = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: Props) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className={styles.container}>
      <button
        className={styles.prevAndNextBtn}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        {"<"}
      </button>
      {pageNumbers.map((page, index) =>
        page === "..." ? (
          <span key={`dots-${index}`} className={styles.dots}>
            ...
          </span>
        ) : (
          <button
            key={page}
            className={`${styles.btn} ${
              page === currentPage ? styles.active : styles.inactive
            }`}
            onClick={() => onPageChange(Number(page))}
          >
            {page}
          </button>
        )
      )}
      <button
        className={styles.prevAndNextBtn}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {">"}
      </button>
    </div>
  );
}
