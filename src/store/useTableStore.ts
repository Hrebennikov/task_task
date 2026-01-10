import { create } from "zustand";
import { Quote } from "../types/index";
import { mockQuotes } from "../assets/mockQuotes";

type State = {
  quotes: Quote[];
  selectedIds: string[];
  isDeleteModalOpen: boolean;
  toggleSelect: (id: string) => void;
  selectAll: (ids: string[]) => void;
  clearSelection: () => void;
  openDeleteModal: () => void;
  closeDeleteModal: () => void;
  deleteSelected: () => void;
  addQuote: (q: Quote) => void;
  updateQuote: (updated: Quote) => void;
  filters: {
    quoteNo: string;
    date: string;
    customer: string;
  };
  setFilters: (filters: State["filters"]) => void;
  getFilteredQuotes: () => Quote[];
};

export const useTableStore = create<State>((set, get) => ({
  quotes: mockQuotes,
  selectedIds: [],
  isDeleteModalOpen: false,
  toggleSelect: (id) => {
    const selected = get().selectedIds;
    set({
      selectedIds: selected.includes(id)
        ? selected.filter((s) => s !== id)
        : [...selected, id],
    });
  },
  addQuote: (q) => {
    set((state) => {
      // Визначаємо максимальний числовий id серед існуючих quotes
      const maxId =
        state.quotes.length > 0
          ? Math.max(...state.quotes.map((quote) => Number(quote.id)))
          : 0;

      // Генеруємо новий id як maxId + 1
      const newId = (maxId + 1).toString();

      return {
        quotes: [...state.quotes, { ...q, id: newId }],
      };
    });
  },
  updateQuote: (updated) =>
    set((state) => ({
      quotes: state.quotes.map((q) => (q.id === updated.id ? updated : q)),
    })),
  filters: {
    quoteNo: "",
    date: "",
    customer: "",
  },
  setFilters: (filters) => set(() => ({ filters })),
  getFilteredQuotes: () => {
    const { quotes, filters } = get();

    return quotes.filter((quote) => {
      const matchQuoteNo =
        !filters.quoteNo ||
        quote.quoteNo.toLowerCase().includes(filters.quoteNo.toLowerCase());

      const matchesDate = !filters.date || filters.date === quote.date;

      const matchCustomer =
        !filters.customer ||
        quote.customer.toLowerCase().includes(filters.customer.toLowerCase());

      return matchQuoteNo && matchesDate && matchCustomer;
    });
  },
  selectAll: (ids) => set({ selectedIds: ids }),
  clearSelection: () => set({ selectedIds: [] }),
  openDeleteModal: () => set({ isDeleteModalOpen: true }),
  closeDeleteModal: () => set({ isDeleteModalOpen: false }),
  deleteSelected: () =>
    set((state) => ({
      quotes: state.quotes.filter((q) => !state.selectedIds.includes(q.id)),
      selectedIds: [],
      isDeleteModalOpen: false,
    })),
}));
