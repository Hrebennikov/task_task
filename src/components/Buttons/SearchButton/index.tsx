import { useState } from "react";
import SearchModal from "../../Modals/SearchModal";
import styles from "./SearchButton.module.scss";

export default function SearchButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className={styles.btn_default}>
        🔍 Search
      </button>
      {open && <SearchModal onClose={() => setOpen(false)} />}
    </>
  );
}
