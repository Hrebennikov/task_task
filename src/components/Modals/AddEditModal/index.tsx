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
          subTotal: initialData.subTotal,
          vat: initialData.vat,
          total: initialData.total,
          deposit: initialData.deposit,
          qutstanding: initialData.qutstanding,
          profit: initialData.profit,
          email: initialData.email,
          description: initialData.description,
          amount: initialData.amount,
        }
      : {
          quoteNo: "",
          date: "",
          customer: "",
          siteDelivery: "",
          noQuotes: "",
          subTotal: "",
          vat: "",
          total: "",
          deposit: "",
          qutstanding: "",
          profit: "",
          email: "",
          description: "",
          amount: 0,
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
    if (form.amount <= 0) {
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
          <input
            type="text"
            placeholder="Quote"
            value={form.quoteNo}
            onChange={(e) => setForm({ ...form, quoteNo: e.target.value })}
            className={styles.modal_input}
          />
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className={styles.modal_input}
          />
          <input
            type="text"
            placeholder="Customer"
            value={form.customer}
            onChange={(e) => setForm({ ...form, customer: e.target.value })}
            className={styles.modal_input}
          />
          <input
            type="text"
            placeholder="Site/Delivery"
            value={form.siteDelivery}
            onChange={(e) => setForm({ ...form, siteDelivery: e.target.value })}
            className={styles.modal_input}
          />
          <input
            type="number"
            placeholder="No. Quotes"
            value={form.noQuotes}
            onChange={(e) => setForm({ ...form, noQuotes: e.target.value })}
            className={styles.modal_input}
          />
          <input
            type="number"
            placeholder="Sub Total"
            value={form.subTotal}
            onChange={(e) => setForm({ ...form, subTotal: e.target.value })}
            className={styles.modal_input}
          />
          <input
            type="number"
            placeholder="VAT"
            value={form.vat}
            onChange={(e) => setForm({ ...form, vat: e.target.value })}
            className={styles.modal_input}
          />
          <input
            type="number"
            placeholder="Total"
            value={form.total}
            onChange={(e) => setForm({ ...form, total: e.target.value })}
            className={styles.modal_input}
          />
          <input
            type="number"
            placeholder="Deposit"
            value={form.deposit}
            onChange={(e) => setForm({ ...form, deposit: e.target.value })}
            className={styles.modal_input}
          />
          <input
            type="number"
            placeholder="Outstanding"
            value={form.qutstanding}
            onChange={(e) => setForm({ ...form, qutstanding: e.target.value })}
            className={styles.modal_input}
          />
          <input
            type="number"
            placeholder="Profit"
            value={form.profit}
            onChange={(e) => setForm({ ...form, profit: e.target.value })}
            className={styles.modal_input}
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={styles.modal_input}
          />
          <input
            type="text"
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className={styles.modal_input}
          />
          <input
            type="number"
            placeholder="Amount"
            value={form.amount}
            onChange={(e) =>
              setForm({ ...form, amount: Number(e.target.value) })
            }
            className={styles.modal_input}
          />
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
