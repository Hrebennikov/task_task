import React from "react";
import { useTableStore } from "../../../store/useTableStore";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import Pagination from "../Pagination";
import { Quote } from "../../../types";
import styles from "./Table.module.scss";

const ITEMS_PER_PAGE = 10;

export default function Table() {
  const quotes = useTableStore((s) => s.quotes);
  const filters = useTableStore((s) => s.filters);
  const [currentPage, setCurrentPage] = React.useState(1);

  const filtered = quotes.filter((q) => {
    return (
      q.quoteNo.toLowerCase().includes(filters.quoteNo.toLowerCase()) &&
      q.date.toLocaleLowerCase().includes(filters.date.toLocaleLowerCase()) &&
      q.customer.toLowerCase().includes(filters.customer.toLowerCase())
    );
  });

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const subTotal = currentData.reduce((acc, item) => {
    return acc + item.total;
  }, 0);

  return (
    <div className={styles.container}>
      <table className={styles.table_block}>
        <TableHeader />
        <tbody>
          {currentData.map((quote: Quote) => (
            <TableRow key={quote.id} quote={quote} />
          ))}
          {currentData.length === 0 && (
            <tr>
              <td colSpan={10}>No matching results</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className={styles.subTotal}>
        <p>Page Sub Total:</p>
        <span>{subTotal} $</span>
      </div>

      <Pagination
        currentPage={currentPage}
        totalItems={filtered.length}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
