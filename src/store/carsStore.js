import { create } from "zustand";

const useCarsStore = create((set) => ({
  usedCars: [],
  isLoading: false,
  error: null,
  updateUsedCars: (update) => set({ usedCars: update }),
  getUsedCars: async () => {
    set({ isLoading: true, error: null, usedCars: [] });
    try {
      const response = await fetch("/api/dev/usados");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      //console.log(data);
      set({ usedCars: JSON.parse(data.body), isLoading: false });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },
  getFilterBrand: async (brand) => {
    set({ isLoading: true, error: null, usedCars: [] });
    try {
      const response = await fetch("/api/dev/usados/marca", {
        method: "POST",
        body: JSON.stringify(brand),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      //console.log(data);
      set({ usedCars: JSON.parse(data.body), isLoading: false });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },
}));

export default useCarsStore;
