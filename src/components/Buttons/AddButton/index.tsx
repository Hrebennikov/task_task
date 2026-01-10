import { useState } from "react";
import AddEditModal from "../../Modals/AddEditModal";
import styles from "./AddButton.module.scss";

export default function AddButton() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)} className={styles.btn_primary}>
        Add
      </button>
      {show && <AddEditModal onClose={() => setShow(false)} />}
    </>
  );
}
