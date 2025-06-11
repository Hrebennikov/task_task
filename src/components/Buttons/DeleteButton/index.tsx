import { useTableStore } from "../../../store/useTableStore";
import styles from "./DeleteButton.module.scss";

export default function DeleteButton() {
  const selected = useTableStore((s) => s.selectedIds);
  const openModal = useTableStore((s) => s.openDeleteModal);

  return (
    <button
      onClick={openModal}
      disabled={selected.length === 0}
      className={`${styles.btn_action} ${
        selected.length ? styles.active : styles.disabled
      }`}
    >
      Delete
    </button>
  );
}
