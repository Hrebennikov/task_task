import React from "react";
import { useTableStore } from "../../../store/useTableStore";
import { Quote } from "../../../types/index";
import styles from "./AddEditModal.module.scss";

type Props = {
  onClose: () => void;
  initialData?: Quote;
};

export default function AddEditModal({ onClose, initialData }: Props) {
  const isEdit = Boolean(initialData);
  const addQuote = useTableStore((s) => s.addQuote);
  const updateQuote = useTableStore((s) => s.updateQuote);

  const [form, setForm] = React.useState<Omit<Quote, "id">>(
    initialData
      ? {
          quoteNo: initialData.quoteNo,
          date: initialData.date,
          customer: initialData.customer,
          siteDelivery: initialData.siteDelivery,
          noQuotes: initialData.noQuotes,
          email: initialData.email,
          description: initialData.description,
          total: initialData.total,
        }
      : {
          quoteNo: "",
          date: "",
          customer: "",
          siteDelivery: "",
          noQuotes: "",
          email: "",
          description: "",
          total: 0,
        }
  );

  const validate = () => {
    if (!form.quoteNo.trim()) {
      alert("Quote number is required.");
      return false;
    }
    if (!form.date.trim()) {
      alert("Date is required.");
      return false;
    }
    if (!form.customer.trim()) {
      alert("Customer name is required.");
      return false;
    }
    if (form.total <= 0) {
      alert("Amount must be greater than 0.");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    if (isEdit) {
      updateQuote({ ...form, id: initialData!.id });
    } else {
      addQuote(form as Quote);
    }

    onClose();
  };

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_container}>
        <h2 className={styles.modal_title}>
          {isEdit ? "Edit Quote" : "Add New Quote"}
        </h2>

        <div className={styles.modal_form}>
          <label>Quote</label>
          <input
            type="text"
            placeholder="Quote"
            value={form.quoteNo}
            onChange={(e) => setForm({ ...form, quoteNo: e.target.value })}
            className={styles.modal_input}
          />
          <label>
            Date
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className={styles.modal_input}
            />
          </label>
          <label>
            Customer
            <input
              type="text"
              placeholder="Customer"
              value={form.customer}
              onChange={(e) => setForm({ ...form, customer: e.target.value })}
              className={styles.modal_input}
            />
          </label>
          <label>
            Site/Delivery
            <input
              type="text"
              placeholder="Site/Delivery"
              value={form.siteDelivery}
              onChange={(e) =>
                setForm({ ...form, siteDelivery: e.target.value })
              }
              className={styles.modal_input}
            />
          </label>
          <label>
            No. Quotes
            <input
              type="number"
              placeholder="No. Quotes"
              value={form.noQuotes}
              onChange={(e) => setForm({ ...form, noQuotes: e.target.value })}
              className={styles.modal_input}
            />
          </label>
          <label>
            Total
            <input
              type="number"
              placeholder="Total"
              value={form.total}
              onChange={(e) =>
                setForm({ ...form, total: Number(e.target.value) })
              }
              className={styles.modal_input}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={styles.modal_input}
            />
          </label>
          <label>
            Description
            <input
              type="text"
              placeholder="Description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className={styles.modal_input}
            />
          </label>
        </div>

        <div className={styles.modal_footer}>
          <button onClick={onClose} className={styles.modal_btn_cancel}>
            Cancel
          </button>
          <button onClick={handleSubmit} className={styles.modal_btn_submit}>
            {isEdit ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
