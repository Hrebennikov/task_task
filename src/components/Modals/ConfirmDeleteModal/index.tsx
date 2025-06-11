import { useTableStore } from "../../../store/useTableStore";
import styles from "./ConfirmDeleteModal.module.scss";

export default function ConfirmDeleteModal() {
  const isOpen = useTableStore((s) => s.isDeleteModalOpen);
  const close = useTableStore((s) => s.closeDeleteModal);
  const confirm = useTableStore((s) => s.deleteSelected);

  if (!isOpen) return null;

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_container}>
        <h2 className={styles.modal_title}>Confirm Deletion</h2>
        <p className={styles.modal_text}>
          Are you sure you want to delete selected items?
        </p>
        <div className={styles.modal_footer}>
          <button onClick={close} className={styles.btn_cancel}>
            Cancel
          </button>
          <button onClick={confirm} className={styles.btn_delete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
