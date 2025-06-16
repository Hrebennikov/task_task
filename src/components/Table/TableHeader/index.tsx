import React from "react";
import Checkbox from "../../Checkbox";
import { useTableStore } from "../../../store/useTableStore";
import styles from "./TableHeader.module.scss";

export default function TableHeader() {
  const quotes = useTableStore((s) => s.quotes);
  const selectedIds = useTableStore((s) => s.selectedIds);
  const toggleSelect = useTableStore((s) => s.toggleSelect);
  const clearSelection = useTableStore((s) => s.clearSelection);

  const allSelected = quotes.length > 0 && selectedIds.length === quotes.length;

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      quotes.forEach((q) => {
        if (!selectedIds.includes(q.id)) toggleSelect(q.id);
      });
    } else {
      clearSelection();
    }
  };

  return (
    <thead className={styles.container}>
      <tr>
        <th className={styles.checkbox}>
          <Checkbox checked={allSelected} onChange={handleSelectAll} />
          <span>№</span>
        </th>
        <th>Quote</th>
        <th>Date</th>
        <th>Customer</th>
        <th>Site/Delivery</th>
        <th>No. Quotes</th>
        <th>Total</th>
        <th>Email</th>
        <th>Description</th>
      </tr>
    </thead>
  );
}
