import { useState } from "react";
import { useTableStore } from "../../../store/useTableStore";
import AddEditModal from "../../Modals/AddEditModal";
import Checkbox from "../../Checkbox";
import { Quote } from "../../../types";
import styles from "./TableRow.module.scss";

type Props = { quote: Quote };

export default function TableRow({ quote }: Props) {
  const selectedIds = useTableStore((s) => s.selectedIds);
  const toggleSelect = useTableStore((s) => s.toggleSelect);
  const isChecked = selectedIds.includes(quote.id);
  const number = quote.id;
  const [editOpen, setEditOpen] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    if (checked && !isChecked) toggleSelect(quote.id);
    if (!checked && isChecked) toggleSelect(quote.id);
  };

  return (
    <>
      <tr>
        <td onClick={(e) => e.stopPropagation()}>
          <Checkbox
            id={number}
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </td>
        <td className={styles.title}>{quote.quoteNo}</td>
        <td className={styles.title}>{quote.date}</td>
        <td className={styles.title}>{quote.customer}</td>
        <td className={styles.title}>{quote.siteDelivery}</td>
        <td className={styles.title}>{quote.noQuotes}</td>
        <td className={styles.title}>{quote.subTotal}</td>
        <td className={styles.title}>{quote.vat}</td>
        <td className={styles.title}>{quote.total}</td>
        <td className={styles.title}>{quote.deposit}</td>
        <td className={styles.title}>{quote.qutstanding}</td>
        <td className={styles.title}>{quote.profit}</td>
        <td className={styles.title}>{quote.email}</td>
        <td className={styles.title}>{quote.description}</td>
        <td className={styles.title}>${quote.amount}</td>
        <td className={styles.title}>
          <svg
            onClick={() => setEditOpen(true)}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              d="M2 11.507V14h2.493L12.307 6.186l-2.493-2.493L2 11.507Z"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="1"
            />
            <path
              d="M13.873 4.187a.66.66 0 0 0 0-.933l-1.127-1.127a.66.66 0 0 0-.933 0l-1.107 1.107 2.493 2.493 1.127-1.127Z"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="1"
            />
          </svg>
        </td>
      </tr>
      {editOpen && (
        <AddEditModal onClose={() => setEditOpen(false)} initialData={quote} />
      )}
    </>
  );
}
