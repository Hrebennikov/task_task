import React from "react";
import { useTableStore } from "../../../store/useTableStore";
import styles from "./SearchModal.module.scss";

type Props = {
  onClose: () => void;
};

export default function SearchModal({ onClose }: Props) {
  const setFilters = useTableStore((s) => s.setFilters);
  const currentFilters = useTableStore((s) => s.filters);

  const [filters, setLocal] = React.useState({
    quoteNo: currentFilters.quoteNo,
    date: currentFilters.date,
    customer: currentFilters.customer,
  });

  const handleApply = () => {
    setFilters(filters);
    onClose();
  };

  const handleReset = () => {
    const emptyFilters = { quoteNo: "", date: "", customer: "" };
    setLocal(emptyFilters);
    setFilters(emptyFilters);
    onClose();
  };

  return (
    <div className={styles.search_modal}>
      <div className={styles.modal_box}>
        <h2>Search Filters</h2>
        <button onClick={onClose} aria-label="Close">
          &times;
        </button>
        <div className={styles.field_group}>
          <div>
            <label>Quote</label>
            <input
              value={filters.quoteNo}
              onChange={(e) =>
                setLocal({ ...filters, quoteNo: e.target.value })
              }
            />
          </div>
          <div>
            <label>Date</label>
            <input
              type="date"
              value={filters.date}
              onChange={(e) => setLocal({ ...filters, date: e.target.value })}
            />
          </div>
          <div>
            <label>Customer</label>
            <input
              value={filters.customer}
              onChange={(e) =>
                setLocal({ ...filters, customer: e.target.value })
              }
            />
          </div>
        </div>

        <div className={styles.modal_actions}>
          <button onClick={handleReset} className={styles.btn_reset}>
            Reset
          </button>
          <button onClick={handleApply} className={styles.btn_apply}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
