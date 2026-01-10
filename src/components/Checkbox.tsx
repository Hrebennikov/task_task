import styles from "./Checkbox.module.scss";

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
};

export default function Checkbox({ checked, onChange, disabled, id }: Props) {
  return (
    <label className={styles.label}>
      <input
        type="checkbox"
        className={styles.custom_checkbox}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <span className={styles.number}>{id}</span>
    </label>
  );
}
